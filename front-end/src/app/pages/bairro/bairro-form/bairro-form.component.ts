import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BairroService } from '../bairro-list/bairro.service';

@Component({
  selector: 'app-bairro-form',
  templateUrl: './bairro-form.component.html',
  styleUrls: ['./bairro-form.component.css'],
})
export class BairroFormComponent implements OnInit {
  bairroForm: FormGroup = this.builder.group({});

  action: string = '';
  residenciaForm: any;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private bairroService: BairroService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.action = this.activatedRoute.snapshot.url[0].path;

    this.createForm();

    if (this.action === 'visualizar') {
      this.bairroForm.disable();
    }
    if (this.action !== 'nova') {
      const id = Number(this.activatedRoute.snapshot.url[1].path);
      this.findById(id);
    }
  }

  createForm(): void {
    this.bairroForm = this.builder.group({
      id: null,
      bairro: [null, [Validators.required, Validators.maxLength(20)]],
    });
  }

  onSave(): void {
    console.log(this.bairroForm);
    console.log(this.bairroService);
    console.log(this.action);

    //função pra ativar error nos campos obrigatorios
    Object.keys(this.bairroForm.controls).forEach((field) =>
      this.bairroForm.get(field)?.markAsTouched()
    );

    // função validar campo do formulario
    if (this.bairroForm.invalid) {
      return;
    }

    this.bairroService.save(this.bairroForm.value).subscribe(() => {
      this.router.navigate(['bairros']);
    });
  }

  onCancel(): void {
    this.router.navigate(['bairros']);
  }

  findById(id: number): void {
    this.bairroService
      .findById(id)
      .subscribe((response) => this.bairroForm.patchValue(response));
  }

  onAlterar(): void {
    this.action = 'alterar';
    this.bairroForm.enable();
  }
}
