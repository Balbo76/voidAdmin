import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board2',
  templateUrl: './dash-board2.component.html',
  styleUrls: ['./dash-board2.component.scss']
})
export class DashBoard2Component implements OnInit {

  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
