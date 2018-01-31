/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashBoard2Component } from './dash-board2.component';

describe('DashBoard2Component', () => {
  let component: DashBoard2Component;
  let fixture: ComponentFixture<DashBoard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
