/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WordsService } from './words.service';
import { HttpClient } from '@angular/common/http';

describe('Service: Words', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsService],
      imports: [HttpClient]
    });
  });

  it('should ...', inject([WordsService], (service: WordsService) => {
    expect(service).toBeTruthy();
  }));

  it('getUserSetsById should return http response', inject([WordsService], (service: WordsService) => {
    expect(service.getUserSetsById(1)).toBeTruthy();
  }));
});
