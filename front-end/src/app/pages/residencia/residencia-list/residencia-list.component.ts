import { Component, OnInit } from '@angular/core';
import { Residencia } from '../residencia';
import { ResidenciaService } from './residencia.service';


@Component({
  selector: 'app-residencia-list',
  templateUrl: './residencia-list.component.html',
  styleUrls: ['./residencia-list.component.css']
})
export class ResidenciaListComponent implements OnInit {

  residenciaList: Residencia[] =[];

  constructor(private residenciaService: ResidenciaService) { }

  ngOnInit(): void {
    this.findAll();
    
  }

  findAll(): void{
    this.residenciaService
    .fiandAll()
    .subscribe((response) => (this.residenciaList = response));
  }

  onDelete(id: number): void {
    this.residenciaService.deleteByid(id).subscribe(()=> this.findAll() );
  }

}
