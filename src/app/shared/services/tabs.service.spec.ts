import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { TabsService } from './tabs.service';

describe('TabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabsService = TestBed.get(TabsService);
    expect(service).toBeTruthy();
  });

  it('should be injected', inject([TabsService], (service: TabsService) => {
    expect(service).toBeTruthy();
  }));

});
