import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDaftarPage } from './form-daftar.page';

describe('FormDaftarPage', () => {
  let component: FormDaftarPage;
  let fixture: ComponentFixture<FormDaftarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDaftarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDaftarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
