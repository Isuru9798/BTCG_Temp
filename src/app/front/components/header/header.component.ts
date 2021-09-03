import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../layouts/front-layout/front-layout.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearch = false;
  constructor() { }


  ngOnInit() {
  }


  openSearchBox() {
    this.showSearch = true;
  }
  hideSearch() {
    this.showSearch = false;
  }
}
