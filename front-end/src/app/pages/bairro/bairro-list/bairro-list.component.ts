import { Component, OnInit } from '@angular/core';
import { Bairro } from '../bairro';
import { BairroService } from './bairro.service';

@Component({
  selector: 'app-bairro-list',
  templateUrl: './bairro-list.component.html',
  styleUrls: ['./bairro-list.component.css'],
})
export class BairroListComponent implements OnInit {
  bairroList: Bairro[] = [];

  constructor(private bairroService: BairroService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.bairroService
      .fiandAll()
      .subscribe((response) => (this.bairroList = response));
  }

  onDelete(id: number): void {
    this.bairroService.deleteByid(id).subscribe(() => this.findAll());
  }
}
