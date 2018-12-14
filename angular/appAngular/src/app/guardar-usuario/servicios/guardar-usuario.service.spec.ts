import { TestBed } from '@angular/core/testing';

import { GuardarUsuarioService } from './guardar-usuario.service';

describe('GuardarUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardarUsuarioService = TestBed.get(GuardarUsuarioService);
    expect(service).toBeTruthy();
  });
});
