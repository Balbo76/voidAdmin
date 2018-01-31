import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Input() toggled: boolean

  constructor() { }
  ngOnInit() { }

  getClass(): string {
    if (this.toggled) {
      return 'change';
    }
    return '';
  }

}
