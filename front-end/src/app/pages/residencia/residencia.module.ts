import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResidenciaListComponent } from './residencia-list/residencia-list.component';
import { ResidenciaFormComponent } from './residencia-form/residencia-form.component';
import { ResidenciaRoutingModule } from './residencia-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { ListComponent } from './residencia-list/lista/list.component';

@NgModule({
  declarations: [ResidenciaListComponent, ResidenciaFormComponent,ListComponent],
  imports: [
    ResidenciaRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
})
export class ResidenciaModule {}
