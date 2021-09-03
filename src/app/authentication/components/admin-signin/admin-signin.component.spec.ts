/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminSigninComponent } from './admin-signin.component';

describe('AdminSigninComponent', () => {
  let component: AdminSigninComponent;
  let fixture: ComponentFixture<AdminSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
