import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layouts/layout/layout.component';
import { FooterComponent } from './layouts/baseboard/footer/footer.component';
import { MaterialModule } from './layouts/menu/material/material.module';
import { MenuNavComponent } from './layouts/menu/menu-nav/menu-nav.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent,FooterComponent,MenuNavComponent],
  imports:
   [
     BrowserModule, 
     AppRoutingModule, 
     HttpClientModule, 
     BrowserAnimationsModule, 
     MaterialModule
     ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
