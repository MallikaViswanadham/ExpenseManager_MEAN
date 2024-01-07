import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowexpenseComponent } from './showexpense/showexpense.component';
//import { AddexpenseComponent } from './addexpense2/addexpense.component';
import { SortbydateComponent } from './sortbydate/sortbydate.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';

const routes: Routes = [
  {path: "Home", component : HomeComponent},
  {path: "showexpense", component : ShowexpenseComponent},
  {path: "addexpense", component : AddexpenseComponent},
  {path: "sortbydate", component :SortbydateComponent},
  {path: "addexpense", component:AddexpenseComponent},
  {path : "", component:HomeComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
