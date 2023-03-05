import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocumentComponent } from './document/document.component';
import { RhsComponent } from './rhs/rhs.component';
import { LhsComponent } from './lhs/lhs.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DocumentComponent,
    RhsComponent,
    LhsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
