import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarUsuarioComponent } from './guardar-usuario.component';

describe('GuardarUsuarioComponent', () => {
  let component: GuardarUsuarioComponent;
  let fixture: ComponentFixture<GuardarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
