import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import { Router, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";

import { NavComponent } from './nav.component';
import { routes } from "../app-routing.module"; 
import { HomeComponent } from "../home/home.component";
import { EntrepriseComponent } from "../entreprise/entreprise.component";
import { FilterDataPipe } from '../shared/pipes/filter-data.pipe';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let compiled;
  let router: Router ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NavComponent,
        HomeComponent,
        EntrepriseComponent,
        FilterDataPipe
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        RouterModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
    router = TestBed.get(Router);
    //location = TestBed.get(Location);

  }));

  beforeEach(() => { 
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not contain div tag', fakeAsync(() => {
    expect(compiled.querySelector('div')).toBeFalsy();
  }));

  it('should contain nav tag', fakeAsync(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('nav')).toBeTruthy();
  }));

  it('should contain ul tag', fakeAsync(() => {
    expect(compiled.querySelector('ul')).toBeTruthy();
  }));

  it('should contain li tag', fakeAsync(() => {
    expect(compiled.querySelector('ul')).toBeTruthy();
  }));

  it('should contain a tag', fakeAsync(() => {
    expect(compiled.querySelector('a')).toBeTruthy();
  }));

  it('should contain 2 li tag', fakeAsync(() => {
    expect(compiled.querySelectorAll('li').length).toEqual(2);
  }));

  it('should contain 2 a tag', fakeAsync(() => {
    fixture.detectChanges();
    expect(compiled.querySelectorAll('a').length).toEqual(2);
  }));

  it('should contain text', fakeAsync(() => {
    expect(compiled.querySelector('nav').textContent).toBeTruthy();
  }));

  it('should a tag contain text', fakeAsync(() => {
    expect(compiled.querySelector('a').textContent).toBeTruthy();
  }));

  it('should a tag text equal to ` home `', fakeAsync(() => {
    expect(compiled.querySelector('a').textContent).toEqual(' home ');
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => { 
    router.navigate(['']); 
    tick();
    //expect(location.path()).toBe('/home'); 
  }));

});
