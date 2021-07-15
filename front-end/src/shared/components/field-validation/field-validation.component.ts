import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-field-validation',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.css']
})
export class FieldValidationComponent implements OnInit {

  @Input() required = false ;

  @ContentChild(HTMLElement) label: any;
  @ContentChild(FormControlName) input: any;

  constructor() {}

  ngOnInit(): void {}

  // funçao validando os campos obrigatório sucesso.
  hasSuccess(): any{
   return this.input.valid && (this.input.dirty || this.input.thouChed);
  }

  // funçao validando os campos obrigatório error.
  hasError(): any{
    return this.input.invalid && (this.input.dirty || this.input.thouChed);
   }

   optionClass(): string {

    if(this.hasSuccess()){

      return 'has-success'
    }
    if(this.hasError()){
      
      return 'has-error'
    }
    return ''

   }

}
