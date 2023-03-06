import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OneComponent } from './homepage/one/one.component';
import { TwoComponent } from './homepage/two/two.component';
import { ButtonComponent } from './homepage/one/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OneComponent,
    TwoComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
