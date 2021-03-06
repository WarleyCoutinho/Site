import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResidenciaService } from '../residencia-list/residencia.service';

@Component({
  selector: 'app-residencia-form',
  templateUrl: './residencia-form.component.html',
  styleUrls: ['./residencia-form.component.css'],
})
export class ResidenciaFormComponent implements OnInit {
  residenciaForm: FormGroup = this.builder.group({});

  action: string = '';

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private residenciaService: ResidenciaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.action = this.activatedRoute.snapshot.url[0].path;

    this.createForm();

    if (this.action === 'visualizar') {
      this.residenciaForm.disable();
    }
    if (this.action !== 'nova') {
      const id = Number(this.activatedRoute.snapshot.url[1].path);
      this.findById(id);
    }
  }

  createForm(): void {
    this.residenciaForm = this.builder.group({
      id: null,
      tipo: [null, [Validators.required, Validators.maxLength(20)]],
      valor: [null, [Validators.required, Validators.maxLength(10)]],
      comodos: [null, [Validators.required, Validators.maxLength(10)]],

      endereco: this.builder.group({
        id: null,
        logradouro: [null, [Validators.required, Validators.maxLength(50)]],
        complemento: [null, [Validators.required, Validators.maxLength(50)]],
        estado: [null, [Validators.required, Validators.maxLength(20)]],
        pais: [null, [Validators.required, Validators.maxLength(20)]],
      }),

      cidade: this.builder.group({
        id: null,
        cidade: [null, [Validators.required, Validators.maxLength(20)]],
      }),

      bairro: this.builder.group({
        id: null,
        bairro: [null, [Validators.required, Validators.maxLength(20)]],
      }),
    });
  }
  //Metodo pra tira os erro no campos obrigatorio de endere??o
  get enderecoForm() {
    return this.residenciaForm.get('endereco') as FormGroup;
  }
  get cidadeForm() {
    return this.residenciaForm.get('cidade') as FormGroup;
  }
  get bairroForm() {
    return this.residenciaForm.get('bairro') as FormGroup;
  }

  onSave(): void {
    //console.log(this.residenciaForm);
    //console.log(this.residenciaService);
    //console.log(this.action);

    //fun????o pra ativar error nos campos obrigatorios
    Object.keys(this.residenciaForm.controls).forEach((field) =>
      this.residenciaForm.get(field)?.markAsTouched()
    );

    //fun????o pra ativar error nos campos obrigatorios de endere??o
    Object.keys(this.enderecoForm.controls).forEach((field) =>
      this.enderecoForm.get(field)?.markAsTouched()
    );

    Object.keys(this.cidadeForm.controls).forEach((field) =>
      this.cidadeForm.get(field)?.markAsTouched()
    );

    Object.keys(this.bairroForm.controls).forEach((field) =>
      this.bairroForm.get(field)?.markAsTouched()
    );

    // fun????o validar campo do formulario
    if (this.residenciaForm.invalid) {
      return;
    }

    this.residenciaService.save(this.residenciaForm.value).subscribe(() => {
      this.router.navigate(['residencias']);
    });
  }

  onCancel(): void {
    this.router.navigate(['residencias']);
  }

  findById(id: number): void {
    this.residenciaService
      .findById(id)
      .subscribe((response) => this.residenciaForm.patchValue(response));
  }

  onAlterar(): void {
    this.action = 'alterar';
    this.residenciaForm.enable();
  }
}
