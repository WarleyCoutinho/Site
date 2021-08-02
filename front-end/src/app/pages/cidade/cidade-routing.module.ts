import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { ListComponent } from './cidade-list/lista/list.component';

const routes: Routes = [
  {
    path: '',
    component: CidadeListComponent,
  },

  {
    path: 'nova',
    component: CidadeFormComponent,
  },
  {
    path: 'visualizar',
    component: ListComponent,
  },

  {
    path: 'visualizar/: id',
    component: CidadeFormComponent,
  },

  {
    path: 'alterar/: id',
    component: CidadeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CidadeRoutingModule {}
