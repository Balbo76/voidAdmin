"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AdminComponent = (function () {
    function AdminComponent() {
        this.toggled = false;
        this.toggledClass = "";
        this.isToggled = function () {
            return this.toggled;
        };
        this.toggleBar = function () {
            this.toggled = !this.toggled;
        };
        this.getClass = function () {
            if (this.toggled) {
                return 'change';
            }
            else {
                return '';
            }
        };
        this.toggled = false;
    }
    AdminComponent.prototype.doSomeActionOnClose = function () {
        console.log('Dropdown is hidden');
    };
    AdminComponent.prototype.doSomeActionOnOpen = function () {
        console.log('Dropdown is shown');
    };
    AdminComponent.prototype.isOpenChange = function () {
        console.log('Dropdown state is changed');
    };
    AdminComponent = __decorate([
        core_1.Component({
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
