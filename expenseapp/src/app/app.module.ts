import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { AddexpenseComponent } from './addexpense2/addexpense.component';
import { ShowexpenseComponent } from './showexpense/showexpense.component';
import { SortbydateComponent } from './sortbydate/sortbydate.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddexpenseComponent,
    ShowexpenseComponent,
    SortbydateComponent,
    AddexpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
