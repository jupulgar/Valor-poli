import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpreguntaComponent } from './crudpregunta.component';

describe('CrudpreguntaComponent', () => {
  let component: CrudpreguntaComponent;
  let fixture: ComponentFixture<CrudpreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudpreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
