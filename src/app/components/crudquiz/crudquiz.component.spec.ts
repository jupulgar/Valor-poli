import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudquizComponent } from './crudquiz.component';

describe('CrudquizComponent', () => {
  let component: CrudquizComponent;
  let fixture: ComponentFixture<CrudquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
