import { TestBed } from '@angular/core/testing';

import { MovieEditGuard } from './movie-edit.guard';

describe('MovieEditGuard', () => {
  let guard: MovieEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MovieEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
