/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExempleFormAutresComponent } from './exemple-form-autres.component';

describe('ExempleFormAutresComponent', () => {
  let component: ExempleFormAutresComponent;
  let fixture: ComponentFixture<ExempleFormAutresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExempleFormAutresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempleFormAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
