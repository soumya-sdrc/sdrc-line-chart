import { TestBed } from '@angular/core/testing';

import { LineChartLibService } from './line-chart-lib.service';

describe('LineChartLibService', () => {
  let service: LineChartLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineChartLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
