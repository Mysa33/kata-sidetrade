import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DataShareService } from './data-share.service';

describe('DataShareService', () => {

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
    
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: []
    });
  }));

  it('should be created', () => {
    const service: DataShareService = TestBed.get(DataShareService);
    expect(service).toBeTruthy();
  });

  it('should be injected', inject([DataShareService], (service: DataShareService) => {
    expect(service).toBeTruthy();
  }));

  it('should storage to be truthy', inject([DataShareService], (service: DataShareService) => {
    expect(service.storage).toBeTruthy();
  }));

  it('should storage to be an Array', inject([DataShareService], (service: DataShareService) => {
    expect(service.storage).toEqual(jasmine.any(Array));
  }));

});
