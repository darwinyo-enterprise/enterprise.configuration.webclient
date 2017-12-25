/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoreLayout } from './core.layout';
import { CovalentExpansionPanelModule } from '@covalent/core';
import { MatListModule, MatIcon } from '@angular/material';

xdescribe('[CORE] [LAYOUT] CORE-LAYOUT', () => {
  let component: CoreLayout;
  let fixture: ComponentFixture<CoreLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreLayout ],
      imports:[
        CovalentExpansionPanelModule,
        MatListModule,
        MatIcon
      ]
    });
  }));
  function createComponent() {
    fixture = TestBed.createComponent(CoreLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
  beforeEach(() => {
    createComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
