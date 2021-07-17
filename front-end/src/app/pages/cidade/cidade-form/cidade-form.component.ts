import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade-list/cidade.service';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit {

  cidadeForm: FormGroup = this.builder.group({});

  action: string = '';
  

    constructor(
    private builder: FormBuilder, 
    private router: Router, 
    private cidadeService: CidadeService,
    private activatedRoute: ActivatedRoute
    
    ) {}

   ngOnInit(): void {

    this.action = this.activatedRoute.snapshot.url[0].path;

    this.createForm();

    if(this.action === 'visualizar'){
      this.cidadeForm.disable();
   }
      if(this.action !== 'nova'){
       const id = Number(this.activatedRoute.snapshot.url[1].path)
       this.findById(id);

      }
  }

  createForm(): void {
       this.cidadeForm = this.builder.group({
       id: null,
       cidade: [null,[Validators.required,Validators.maxLength(20)]],
     
    });
  }
  
   onSave(): void {
      //console.log(this.cidadeForm);
      //console.log(this.cidadeService);
      //console.log(this.action)
    
     //função pra ativar error nos campos obrigatorios
     Object.keys(this.cidadeForm.controls)
     .forEach((field) => this.cidadeForm
     .get(field)?.markAsTouched());

   // função validar campo do formulario
    if(this.cidadeForm.invalid) {
      return;
    }

    this.cidadeService.save(this.cidadeForm.value).subscribe(() => {
      this.router.navigate(['cidades']);
    });
  }

   onCancel(): void {
    this.router.navigate(['cidades']);
  }

   findById(id: number): void {
     this.cidadeService
     .findById(id)
     .subscribe(response => this.cidadeForm.patchValue(response));
   }

   onAlterar(): void {
     this.action = 'alterar';
     this.cidadeForm.enable();
   }

}
