"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var dash_board_component_1 = require('./dash-board/dash-board1/dash-board.component');
var tables_component_1 = require('./tables/tables.component');
var utenti_component_1 = require('./utenti/utenti.component');
var flotcharts_component_1 = require('./flotcharts/flotcharts.component');
var page_not_found_component_1 = require('../public/page-not-found/page-not-found.component');
var auth_guard_service_1 = require('./auth-guard.service');
var adminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'tables', component: tables_component_1.TablesComponent },
                    { path: 'utente/:id', component: utenti_component_1.UtentiComponent },
                    { path: 'chartsflot', component: flotcharts_component_1.FlotchartsComponent },
                    { path: '', component: dash_board_component_1.DashBoardComponent },
                    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(adminRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
