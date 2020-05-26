import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudrespuestaComponent } from './crudrespuesta.component';

describe('CrudrespuestaComponent', () => {
  let component: CrudrespuestaComponent;
  let fixture: ComponentFixture<CrudrespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudrespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudrespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
