import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.css']
})
export class CidadeListComponent implements OnInit {
  cidadeList: Cidade[] =[];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.cidadeService
    .fiandAll()
    .subscribe((response) => (this.cidadeList = response));
  }

  onDelete(id: number): void {
    this.cidadeService.deleteByid(id).subscribe(()=> this.findAll() );
  }

}
