import { Component, OnInit } from '@angular/core';
import { Bairro } from '../../bairro';
import { BairroService } from '../bairro.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
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

  
}
