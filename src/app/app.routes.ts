import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
   { path: 'contact' , component: ContactComponent},
   { path: 'categories' , component: CategoriesComponent},
   { path: 'aboutme', component: AboutmeComponent },

];


@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forRoot(routes)]
}) 
export class AppRoutingModule {}
