import { TestBed } from '@angular/core/testing';

import { DictionairedesMotsService } from './dictionairedes-mots.service';

describe('DictionairedesMotsService', () => {
  let service: DictionairedesMotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionairedesMotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
