import { TestBed } from '@angular/core/testing';

import { EndpointsSimulationService } from './endpoints-simulation.service';

describe('EndpointsSimulationService', () => {
  let service: EndpointsSimulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointsSimulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
