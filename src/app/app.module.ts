import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterDataPipe } from './shared/pipes/filter-data.pipe';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { MapsComponent } from './widgets/maps/maps.component';
import { TabsComponent } from './widgets/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterDataPipe,
    NavComponent,
    HomeComponent,
    EntrepriseComponent,
    MapsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
