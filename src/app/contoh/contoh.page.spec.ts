import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContohPage } from './contoh.page';

describe('ContohPage', () => {
  let component: ContohPage;
  let fixture: ComponentFixture<ContohPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContohPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
