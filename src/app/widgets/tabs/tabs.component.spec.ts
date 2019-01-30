import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create itemInfos prop', () => {
    let prop = component.itemInfos;    
    expect(prop).toBe(undefined);
  });

  it('should not to be null', () => {
    let prop = component.itemInfos;    
    expect(prop).not.toBe(null);
  });

  it('should tabsItems be truthy', () => {
    let prop = component.tabsItems;    
    expect(prop).toBeTruthy();
  });

  it('should hiddenTabs be truthy', () => {
    let prop = component.hiddenTabs;    
    expect(prop).toBeTruthy();
  });

  it('should tabsItems be', () => {
    let prop = component.tabsItems;       
    expect(prop).toEqual(jasmine.any(Array));
  });

  it('should hiddenTabs be', () => {
    let prop = component.hiddenTabs;       
    expect(prop).toEqual(jasmine.any(Array));
  });

  it('should ...', () => {
    let item = component.itemInfos;   
    let tabs = component.tabsItems; 
    
  });

});
