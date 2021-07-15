import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { CidadeFormComponent } from './pages/cidade/cidade-form/cidade-form.component';
import { CidadeListComponent } from './pages/cidade/cidade-list/cidade-list.component';
import { BairroListComponent } from './pages/bairro/bairro-list/bairro-list.component';
import { BairroFormComponent } from './pages/bairro/bairro-form/bairro-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    CidadeFormComponent,
    CidadeListComponent,
    BairroListComponent,
    BairroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
