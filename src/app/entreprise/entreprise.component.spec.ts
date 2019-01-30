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
import { Item } from '../../fixtures/item';

describe('EntrepriseComponent', () => {
  let component: EntrepriseComponent;
  let fixture: ComponentFixture<EntrepriseComponent>;
  let compiled;
  let data;  
  let method;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        EntrepriseComponent,
        HomeComponent,
        NavComponent,
        FilterDataPipe
      ],
      imports:[
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

  //Render with mock data
  beforeEach(fakeAsync(() => {
    data = new Item().data;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one div', fakeAsync(() => {
    tick(1000);
    expect(compiled.querySelector('div')).toBeTruthy();
  }));
  /*
  Dom testing
  */
  it('should have h4 tag', fakeAsync(() => {
    expect(compiled.querySelector('h4')).toBeTruthy();
  }));

  it('should h4 tag contain text', fakeAsync(() => {
    expect(compiled.querySelector('h4').innerText).toBeTruthy();
  }));

  it('should h4 tag text to equal `Company infos :`', fakeAsync(() => {
    expect(compiled.querySelector('h4').innerText).toEqual('Company infos :');
  }));

  /*
  Testing mock data
  */
  it('should mock data to be truthy', fakeAsync(() => {
    expect(data).toBeTruthy();
  }));

  it('should mock data to be', fakeAsync(() => {
    expect(data).toEqual(jasmine.any(Object));
  }));

    
  it('should mock data props to be truthy', fakeAsync(() => {
    for(let i in data){
      expect(data[i]).toBeTruthy();
    }
  }));

  it('should mock data be', fakeAsync(() => {
    /*Set data */
    let url:string;
    let mockItemUrl:string;
    let name:string;
    url = data.profilePictureUrl;
    name = data.officialName;
    /*test with mock data*/
    expect(url).toBeTruthy();
    expect(name).toBeTruthy();
    expect(url).toEqual("https://kolinkis.com/wp-content/uploads/2018/07/logo-biomerieux-1-300x300.jpeg");
    expect(name).toEqual("BIOMERIEUX SA");
  }));

  it('should setItem () return', fakeAsync(() => {
    let mockData:any[] = [data, data];
    let item = data;
    let id:string = "FR-673620399";
    let returnedElmnt = component.setItem(mockData, item ,id);
    let elementIndex = mockData.map(x =>{return x.companyId; }).indexOf(id);
    component.setItem(mockData, mockData[elementIndex] ,id);//Todo : rework
    component.item.profilePictureUrl = mockData[elementIndex].profilePictureUrl;
    expect(mockData).toBeTruthy();
    expect(returnedElmnt).toBeTruthy();
    expect(mockData).not.toBe(null);
    expect(returnedElmnt).not.toBe(null);
    expect(elementIndex).not.toBe(null);
    expect(elementIndex).toEqual(0);
    expect(item.companyId).toEqual(id);
    expect(item.profilePictureUrl).toEqual("https://kolinkis.com/wp-content/uploads/2018/07/logo-biomerieux-1-300x300.jpeg");
    expect(item.profilePictureUrl).toEqual(component.item.profilePictureUrl);
  }));
  

});
