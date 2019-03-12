import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Router } from "@angular/router";
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
//import { MockBackend } from '@angular/http/testing';

import { HomeComponent } from './home.component';
import { EntrepriseComponent } from '../entreprise/entreprise.component';
import { NavComponent } from '../nav/nav.component';
import { FilterDataPipe } from '../shared/pipes/filter-data.pipe';
import {ApiService} from '../shared/services/api.service';
import { DataShareService } from '../shared/services/data-share.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled;
  let httpMock: HttpTestingController;
  let dataService: ApiService;
  let mockData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        EntrepriseComponent,
        NavComponent,
        FilterDataPipe
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        DataShareService,
        ApiService
      ]
    })
    .compileComponents();
    dataService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    dataService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should itemsNb to equal 10`, async(() => {
    expect(component.itemsNb).toEqual(10);
  }));

  it('should have one div at less', async(() => {
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should contain text', async(() => {
    expect(compiled.querySelector('div').textContent).toBeTruthy();
  }));

  it('should contain input tag', async(() => {
    expect(compiled.querySelector('input')).toBeTruthy();
  }));

  it('should not contain form tag', async(() => {
    expect(compiled.querySelector('form')).toBeFalsy();
  }));

  it('should contain div.entreprises-row', async(() => {
    expect(compiled.querySelector('div.entreprises-row')).toBeTruthy();
  }));

  it('should contain only one div.entreprises-row', async(() => {
    expect(compiled.querySelectorAll('div.entreprises-row').length).toEqual(1);
  }));

  it('should contain div.company-wrapper', async(() => {
    expect(compiled.getElementsByClassName('company-wrapper')).toBeTruthy();
  })); 

});