import { async, ComponentFixture, TestBed, fakeAsync, tick  } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TabsComponent } from './tabs.component';
import { Item } from '../../../fixtures/item';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let compiled;
  let mockItem;

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

  it('should render and test mock data', fakeAsync(() => {
    /*
    Set mock data
    */
    let item;   
    let tabs;
    let method;
    item = new Item().data;
    tabs = [
      {"title":"description","pannelData":item.description},
      {"title":"data","pannelData":{"revenues":item.data.revenue,"employees":item.data.employees}}
    ];
    /*
    Testing mock data
    */
    expect(item).toBeTruthy();
    expect(tabs).toBeTruthy();
    expect(item).toEqual(jasmine.any(Object));
    expect(tabs).toEqual(jasmine.any(Object));
    for(let i in item){
      expect(item[i]).toBeTruthy();
    }
    for(let i in tabs){
      expect(tabs[i]).toBeTruthy();
    }
  }));

  it('should render with mock data', fakeAsync(() => {
    /*
    Set data
    */
    let i:number = 1;
    let prop;
    let tabs;
    let compToggleMetohd:object;
    let compPannelMetohd:object;
    component.itemInfos = new Item().data;
    prop = component.itemInfos;
    component.tabsItems = [
      {"title":"description","pannelData":prop.description},
      {"title":"data","pannelData":{"revenues":prop.data.revenue,"employees":prop.data.employees}}
    ];
    tabs = component.tabsItems;
    tick(2000);
    fixture.detectChanges();
    compToggleMetohd = component.toggleTabNav(i);
    compPannelMetohd = component.toggleTabPannel(i, tabs);
    /*
    Tests
    */
    expect(prop).toEqual(jasmine.any(Object));
    expect(tabs).toEqual(jasmine.any(Object));
    expect(compToggleMetohd).toEqual(jasmine.any(Object));
    expect(compPannelMetohd).toEqual(jasmine.any(Object));
    for(let i in prop){
      expect(prop[i]).toBeTruthy();
    }
    for(let i in tabs){
      expect(tabs[i]).toBeTruthy();
    }
    /*Should render*/
    expect(compiled.querySelector('div')).toBeTruthy();
    expect(compiled.querySelector('article')).toBeTruthy();
    expect(compiled.querySelector('p')).toBeTruthy();
    expect(compiled.querySelector('strong')).toBeTruthy();
    expect(compiled.querySelector('div').textContent).toBeTruthy();
    expect(compiled.querySelector('article').textContent).toBeTruthy();
    expect(compiled.querySelector('p').textContent).toBeTruthy();
    expect(compiled.querySelector('strong').textContent).toBeTruthy();
    expect(compiled.getElementsByClassName('pannel-wrapper')).toBeTruthy();
    expect((compiled.getElementsByClassName('pannel-wrapper').length)).toEqual(2);
    expect(compiled.querySelector('form')).toBeFalsy();
    expect(compiled.querySelector('input')).toBeFalsy();
  }));

});
