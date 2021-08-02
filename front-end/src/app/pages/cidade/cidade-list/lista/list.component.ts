import { Component, OnInit } from '@angular/core';
import { Cidade } from '../../cidade';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cidadeList: Cidade[] = [];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.cidadeService
      .fiandAll()
      .subscribe((response) => (this.cidadeList = response));
  }

 
}
