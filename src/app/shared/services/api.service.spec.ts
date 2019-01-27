import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {

  let httpMock: HttpTestingController;
  let dataService: ApiService;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [ApiService]
    });
    dataService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('getData() should http GET data', () => {
    const data = [];//Data
    dataService.getData().subscribe((res) => {
      expect(res).toEqual(data);
    });
    const req = httpMock.expectOne('assets/data/search.json');
    expect(req.request.method).toEqual("GET");
    req.flush(data);

    httpMock.verify();
  });

});
