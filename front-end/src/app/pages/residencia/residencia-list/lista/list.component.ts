import { Component, OnInit } from '@angular/core';
import { Residencia } from '../../residencia';
import { ResidenciaService } from '../residencia.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  residenciaList: Residencia[] = [];

  constructor(private residenciaService: ResidenciaService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.residenciaService
      .fiandAll()
      .subscribe((response) => (this.residenciaList = response));
  }

  
}
