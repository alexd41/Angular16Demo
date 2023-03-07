import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OneComponent } from './homepage/one/one.component';
import { TwoComponent } from './homepage/two/two.component';
import { ButtonComponent } from './homepage/one/button/button.component';
import { Consumer2Component, ConsumerComponent } from './demonstration';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OneComponent,
    TwoComponent,
    ButtonComponent,
    ConsumerComponent,
    Consumer2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
