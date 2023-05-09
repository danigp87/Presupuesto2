import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent
},
{
    path: 'panell',
    component: PanellComponent
},
{
    path: '**',
    redirectTo: 'home'
}]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}