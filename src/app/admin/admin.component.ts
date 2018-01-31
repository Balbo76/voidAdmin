import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {BreadcrumbsComponent} from './_ui/breadcrumbs/breadcrumbs.component';
import {SidebarComponent} from './_ui/sidebar/sidebar.component';
import {NavbarComponent} from "./_ui/navbar/navbar.component";

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public toggled: boolean;
  public containerFluid: boolean;
  public sidebarFixed: boolean;
  public sidebarCompressed: boolean;
  public navbarFixed: boolean;
  public backToTop: boolean;

  @ViewChild(BreadcrumbsComponent) breadcrumbs: BreadcrumbsComponent;
  @ViewChild(SidebarComponent) sidebar: SidebarComponent;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.toggled = false;
    this.containerFluid = true;
    this.navbarFixed = true;
    this.sidebarFixed = true;
    this.sidebarCompressed = false;
    this.backToTop = true;

    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        if (event['breadcrumb']){
          this.breadcrumbs.path = event['breadcrumb'];
        }
      });
  }

  ngOnInit() {

    this.sidebar.menu = [
      {name: 'Dashboard', icons: 'fa fa-tachometer fa-fw', submenu: [
          {name: 'Dashboard', link: '/admin'},
          {name: 'Dashboard 2', link: '/admin/dashboard2'}
        ],
        open: false
      },
      {name: 'Angular Charts', icons: 'fa fa-bar-chart-o fa-fw', link: '/admin/ng2-charts' },
      {name: 'Tables', icons: 'fa fa-table fa-fw', link: '/admin/tables'},
      {name: 'Forms', icons: 'fa fa-edit fa-fw', link: '/admin'},
      {name: 'UI Elements', icons: 'fa fa-wrench fa-fw',
        submenu: [
          {name: 'Panels & Wells', link: '/admin/panels'},
          {name: 'Buttons', link: '/admin/buttons'},
          {name: 'Notifications', link: '/admin/notifications'},
          {name: 'Typography', link: '/admin/typography'},
          {name: 'Icons', link: '/admin/icons'},
          {name: 'Grid', link: '/admin/grid'}],
        open: false
      },
      {name: 'Menu Dropdown', icons: 'fa fa-sitemap fa-fw', link: '/admin'},
      {name: 'Sample pages', icons: 'fa fa-files-o fa-fw',
        submenu: [
          {name: 'Calendar', link: '/admin/calendar'},
          {name: 'Blank Page', link: '/admin/blank'}
        ],
        open: false
      }
    ];

    this.navbar.messages = {
      active: true,
      data: [
        { date: new Date(), name: 'Pippo', message: 'Ho fatto la pipi, Ho fatto la pipi, papà!', link: '/admin' },
        { date: new Date(), name: 'Pippo', message: 'Ho fatto la pipi, Ho fatto la pipi, papà!', link: '/admin' },
        { date: new Date(), name: 'Pippo', message: 'Ho fatto la pipi, Ho fatto la pipi, papà!', link: '/admin' }
      ]
    };

    this.navbar.notifications = {
      active: true,
      data: [
        { date: "12 minutes ago", text: '3 New Followers', icons: 'fa fa-twitter fa-fw', link: '/admin' },
        { date: "27 minutes ago", text: 'Message Sent', icons: 'fa fa-envelope fa-fw', link: '/admin' },
        { date: "43 minutes ago", text: 'New Task', icons: 'fa fa-tasks fa-fw', link: '/admin' },
        { date: "11:32 AM", text: 'Server Rebooted', icons: 'fa fa-upload fa-fw', link: '/admin' }
      ]
    };

    this.navbar.tasks = {
      active: true,
      data: [
        { class: '', completed: 60, text: 'cosa 0'},
        { class: 'progress-bar-success', completed: 60, text: 'qui'},
        { class: 'progress-bar-info', completed: 40, text: 'Quo'},
        { class: 'progress-bar-danger', completed: 80, text: 'cosa 4'},
        { class: 'progress-bar-warning', completed: 20, text: 'Qua'}
      ]
    };
  };

  toggleSidebar(e: Event): void {
    this.toggled = !this.toggled;
  }

  clickToggleContainer(e: Event): void {
    this.containerFluid = !this.containerFluid;
  }

  clickToggleSidebarFixed(e: Event): void {
    this.sidebarFixed = ! this.sidebarFixed;
  }

  clickToggleCompressed(e: Event): void {
    this.sidebarCompressed = !this.sidebarCompressed;
  }

  clickToggleBackToTop(e: Event): void {
    this.backToTop = !this.backToTop;
  }

  clickToggleNavbarFixed(e: Event): void {
    this.navbarFixed = !this.navbarFixed;
  }
}
