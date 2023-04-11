import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppComponent } from './components/app.component';
import { HomepageComponent } from './components/homepage.component';
import { OneComponent } from './components//one.component';
import { TwoComponent } from './components//two.component';
import { ButtonComponent } from './components/button.component';
import { Consumer2Component, ConsumerComponent } from './demonstration';
import { AppyComponent } from './hello.component';

@NgModule({
  declarations: [
    AppComponent,
    AppyComponent,
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
