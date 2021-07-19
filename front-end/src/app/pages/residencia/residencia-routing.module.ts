import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenciaFormComponent } from './residencia-form/residencia-form.component';
import { ResidenciaListComponent } from './residencia-list/residencia-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResidenciaListComponent,
  },

  {
    path: 'nova',
    component: ResidenciaFormComponent,
  },

  {
    path: 'visualizar/: id',
    component: ResidenciaFormComponent,
  },

  {
    path: 'alterar/: id',
    component: ResidenciaFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidenciaRoutingModule {}
