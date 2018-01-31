import {Component, OnInit, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})


export class BackToTopComponent implements OnInit {

  public visible: boolean;

  @Input() active: boolean;

  constructor() {
    this.visible = false;
    this.active = true;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  topFunction() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
