import { Injectable } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    getHeroes(): Observable<Hero[]> {
        // TODO: send the message _after_ fetching the heroes
        return this.http.get<Hero[]>(this.heroesUrl).pipe(
            tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Hero[]>('getHeroes', []))
        )
    }

    getHero(id: number): Observable<Hero> {
        // TODO: send the message _after_ fetching the hero
        const url = `${this.heroesUrl}/${id}`
        return this.http.get<Hero>(url).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        )
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
    
    private heroesUrl = 'api/heroes'; // Web API URL

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: リモート上のロギング基盤にエラーを送信する
            console.error(error);

            // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
            // custom error message
            let message: string
            if ('message' in error.error) {
                message = error.error.message
            }
            // express default
            else {
                message = error.message
            }
            
            this.log(`${operation} failed: ${message}`);

            // 空の結果を返して、アプリを持続可能にする
            return of(result as T);
        }
    }

    updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
            tap(_ => this.log(`updated hero id=${hero.heroId}`)),
            catchError(this.handleError<any>('updateHero'))
        )
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
            tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.heroId}`)),
            catchError(this.handleError<Hero>('addHero'))
        )
    }

    deleteHero(hero: Hero | number): Observable<Hero> {
        const id = typeof hero === 'number' ? hero : hero.heroId
        const url = `${this.heroesUrl}/${id}`
        return this.http.delete<Hero>(url, this.httpOptions).pipe(
            tap(_ => this.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
        )
    }

    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
            tap(_ => this.log(`found heroes matching "${term}"`)),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
        )
    }

    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) { }
}
