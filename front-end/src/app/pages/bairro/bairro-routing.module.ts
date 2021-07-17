import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BairroFormComponent } from './bairro-form/bairro-form.component';
import { BairroListComponent } from './bairro-list/bairro-list.component';

const routes: Routes = [


  {
    path: '',
    component: BairroListComponent,
  },

  {
    path: 'nova',
    component: BairroFormComponent,
  },

  {
    path: 'visualizar/: id',
    component: BairroFormComponent,
  },

  {
    path: 'alterar/: id',
    component: BairroFormComponent,
  },

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BairroRoutingModule { }
