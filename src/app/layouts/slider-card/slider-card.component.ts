import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss','../../../app.component.scss']
})
export class SliderCardComponent implements OnInit {

  @Input() Data = [];

  constructor() { }

  ngOnInit() {
    this.Data;
  }

}