"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ngx_dropdown_1 = require('ngx-dropdown');
var admin_routing_module_1 = require('./admin-routing.module');
var admin_component_1 = require('./admin.component');
var dash_board_component_1 = require('./dash-board/dash-board1/dash-board.component');
var utenti_component_1 = require('./utenti/utenti.component');
var tables_component_1 = require('./tables/tables.component');
var auth_guard_service_1 = require('./auth-guard.service');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                ngx_dropdown_1.DropdownModule
            ],
            declarations: [
                admin_component_1.AdminComponent,
                dash_board_component_1.DashBoardComponent,
                utenti_component_1.UtentiComponent,
                tables_component_1.TablesComponent
            ],
            providers: [
                auth_guard_service_1.AuthGuard
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
