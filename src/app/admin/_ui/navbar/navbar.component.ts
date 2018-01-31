import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggler = new EventEmitter<any>();
  @Input() toggled: boolean;
  @Input() containerFluid: boolean;
  @Input() navbarFixed: boolean;

  public fixed: boolean;
  public messages: any;
  public tasks: any;
  public notifications: any;

  constructor() {
    this.fixed = false;
    this.messages = { active: false, data: [ ] };
    this.notifications = { active: false, data: [ ] };
    this.tasks = { active: false, data: [ ] };
  }

  ngOnInit() { }

  getContainerClass = function () {
    return this.containerClass;
  }

  toggleBar = function () {
    this.toggler.emit(null);
  }

}



