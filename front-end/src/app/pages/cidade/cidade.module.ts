import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { CidadeRoutingModule } from './cidade-routing.module';
import { ListComponent } from './cidade-list/lista/list.component';

@NgModule({
  declarations: [CidadeListComponent, CidadeFormComponent,ListComponent],
  imports: [
    CidadeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
})
export class CidadeModule {}
