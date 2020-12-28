import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

export interface User {
    name: string
    email: string
    password: string
}

@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(
        private messageService: MessageService,
        private http: HttpClient
    ) { }

    private usersUrl = 'api/users'

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    createUser(user: User): Observable<User> {
        const url = `${this.usersUrl}/register`
        return this.http.post<User>(url, user, this.httpOptions).pipe(
            tap((newUser: User) => this.log(`created user w/ email=${newUser.email}`)),
            catchError(this.handleError<User>('createUser'))
        )
    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

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
            // express default message
            else {
                message = error.message
            }
            
            this.log(`${operation} failed: ${message}`);

            // 空の結果を返して、アプリを持続可能にする
            return of(result as T);
        }
    }

}
