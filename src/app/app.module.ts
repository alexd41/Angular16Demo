import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocumentComponent } from './document/document.component';
import { RhsComponent } from './rhs/rhs.component';
import { LhsComponent } from './lhs/lhs.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';
import { DeliveryComponent } from './navbar/toolbar/delivery/delivery.component';
import { SelectedTextMenuComponent } from './selected-text-menu/selected-text-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DocumentComponent,
    RhsComponent,
    LhsComponent,
    ToolbarComponent,
    DeliveryComponent,
    SelectedTextMenuComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
