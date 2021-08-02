import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { BairroRoutingModule } from '../bairro/bairro-routing.module';
import { BairroFormComponent } from './bairro-form/bairro-form.component';
import { BairroListComponent } from './bairro-list/bairro-list.component';
import { ListComponent } from './bairro-list/lista/list.component';

@NgModule({
  declarations: [BairroListComponent, BairroFormComponent,ListComponent],
  imports: [
    BairroRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
})
export class BairroModule {}
