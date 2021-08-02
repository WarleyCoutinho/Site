import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.css']
})
export class HeaderListComponent implements OnInit {
  @Output() headerClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  public onHeaderClose = () => {
    this.headerClose.emit();
  }

}
