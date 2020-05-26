import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContactComponent } from './perfil-contact.component';

describe('PerfilContactComponent', () => {
  let component: PerfilContactComponent;
  let fixture: ComponentFixture<PerfilContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
