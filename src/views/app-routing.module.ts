import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { CoverComponent } from './cover/cover.component'

const routes: Routes = [
  { path: '', redirectTo: '/cover', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'cover', component: CoverComponent },
  { path: 'detail/:id', component: HeroDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
