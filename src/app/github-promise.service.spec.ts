import { TestBed } from '@angular/core/testing';

import { GithubPromiseService } from './github-promise.service';

describe('GithubPromiseService', () => {
  let service: GithubPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
