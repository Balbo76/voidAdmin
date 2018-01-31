import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() toggler = new EventEmitter<any>();
  @Input() sidebarFixed: boolean;
  @Input() sidebarCompressed: boolean;

  private isCollapsed: boolean;

  public menu: Array<Object>;

  private closeSubMenu(): void {
    for (let menuItem of this.menu) {
      if (menuItem.hasOwnProperty('open')) {
        menuItem["open"] = false;
      }
    }
  }

  constructor() {

  }

  ngOnInit() { }

  toggleBar() {
    this.toggler.emit(null);
  }

  toggleOpen(openState):boolean {
    if (openState === false) {
      this.closeSubMenu();
    }
    return !openState;
  }

}
