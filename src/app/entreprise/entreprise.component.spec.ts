import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { EntrepriseComponent } from './entreprise.component';
import { HomeComponent } from '../home/home.component';
import { NavComponent } from '../nav/nav.component';
import { FilterDataPipe } from '../shared/pipes/filter-data.pipe';
import { DataShareService } from '../shared/services/data-share.service';

describe('EntrepriseComponent', () => {
  let component: EntrepriseComponent;
  let fixture: ComponentFixture<EntrepriseComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        EntrepriseComponent,
        HomeComponent,
        NavComponent,
        FilterDataPipe
      ],
      imports:[
        //ActivatedRoute,
        AppRoutingModule,
        FormsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        DataShareService
      ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(EntrepriseComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one div', fakeAsync(() => {
    tick(1000);
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should have h4 tag', fakeAsync(() => {
    expect(compiled.querySelector('h4')).toBeTruthy();
  }));

  it('should h4 tag contain text', fakeAsync(() => {
    expect(compiled.querySelector('h4').innerText).toBeTruthy();
  }));

  it('should h4 tag text to equal `Company infos :`', fakeAsync(() => {
    expect(compiled.querySelector('h4').innerText).toEqual('Company infos :');
  }));

});
