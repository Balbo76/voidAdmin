import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-float-options',
  templateUrl: './float-options.component.html',
  styleUrls: ['./float-options.component.scss']
})
export class FloatOptionsComponent implements OnInit {

  @Output() togglecontainer = new EventEmitter<any>();
  @Output() togglesidebarfixed = new EventEmitter<any>();
  @Output() togglecompressed = new EventEmitter<any>();
  @Output() togglebacktotop = new EventEmitter<any>();
  @Output() togglenavbarfixed = new EventEmitter<any>();

  @Input() navbarFixed: boolean;
  @Input() containerFluid: boolean;
  @Input() sidebarFixed: boolean;
  @Input() sidebarCompressed: boolean;
  @Input() backToTop: boolean;

  public toggled: boolean;

  constructor() {
    this.toggled = false;
  }

  ngOnInit() {
    console.log(this.navbarFixed);
  }

  toggleOptions() {
    this.toggled = !this.toggled;
  }

  clickToggleNavbarFixed() {
    this.togglenavbarfixed.emit(null);
  }

  clickToggleContainer() {
    this.togglecontainer.emit(null);
  }

  clickToggleSidebarFixed() {
    this.togglesidebarfixed.emit(null);
  }

  clickToggleCompressed() {
    this.togglecompressed.emit(null);
  }

  clickToggleBackToTop() {
    this.togglebacktotop.emit(null);
  }

}
