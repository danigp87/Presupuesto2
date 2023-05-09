import { AppRoutingModule } from './app-routing.module';
import { Component, Input, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { RouterModule, Routes } from '@angular/router';
import { Presu } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @Input() presus: Presu[] = []

  welcome = true
  start() {
    this.welcome = false
  }
  back() {
    this.welcome = true
  }

}

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'panell', component: PanellComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) */

/* export class AppRoutingModule {} */
