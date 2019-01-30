import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { TabsService } from '../../shared/services/tabs.service';

@Component({
  selector: 'app-tabs',
  template: `
    <ul id="tabsNav" class="nav nav-tabs">
      <li id ="tab_{{i}}" class="nav-item tabs-nav-item" *ngFor = "let item of tabsItems; let i = index" (click) = "toggleTabNav(i);">
        <a class="nav-link">
          <h6>
            {{item.title}} : 
          </h6>
        </a>
      </li>
    </ul>
    <div id="pannelsWrapper" class="col-lg-12">
    
      <div class="pannel-wrapper" *ngFor= "let pannel of tabsItems; let j = index" id="pannel_{{j}}">
        <article>
          <p>
            <strong>{{tabsItems[j].title}} :</strong>
          </p>
          <p *ngIf="j == 0">
            {{tabsItems[j].pannelData}} 
          </p>
          <p *ngIf="j == 1">
           Employees : {{pannel.pannelData.employees}} 
          </p>
          <p *ngIf="j == 1">
            Revenues : {{pannel.pannelData.revenues}} 
          </p>
        </article>
      </div>
    
    </div>
  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input () itemInfos:any;
  public tabsItems:any[] = [];
  public hiddenTabs:any[] = [];

  constructor(private _tabsService:TabsService) { }

  ngOnInit() {

    this.setTabs (this.itemInfos, this.tabsItems);

  }

  ngAfterViewInit() {

    this.initTabs ();

  }

  initTabs ():object {

    this._tabsService.initNav ();
    this._tabsService.initPannels ();
    var activeTabsElmnts:object = {
      "nav":this._tabsService.initNav (),
      "pannel":this._tabsService.initPannels ()
    };
    return activeTabsElmnts;

  }

  toggleTabNav (i:number):object {
    
    var elmntId = "tab_" + i;
    var parentNode = document.getElementById("tabsNav");
    var elmnt:any = document.getElementById(elmntId);
    var elmnts = parentNode.querySelectorAll('li');
    for (let i = 0; i < elmnts.length; i++) {
      elmnts[i].classList.remove('active')
    }
    elmnt.classList.add("active");
    this.toggleTabPannel (i, this.tabsItems);
    return elmnt;

  }

  toggleTabPannel (i:number, tabsItems:any[]):object {
    
    var parentNode = document.getElementById("pannelsWrapper");
    var pannels = parentNode.querySelectorAll('div.pannel-wrapper');
    var elmntId = "pannel_" + i;
    var pannel:any = document.getElementById(elmntId);
    for (let k = 0; k < pannels.length; k++) {
      pannels[k].classList.remove('visible-pannel');
      pannels[k].classList.add('hidden-pannel');
    }
    pannel.classList.remove('hidden-pannel');
    return pannel;

  }

  setTabs (itemInfos:any, tabsItems:object):object {
    
    this.tabsItems = [
      {
        "title":"description",
        "pannelData":this.itemInfos.description
      },
      {
        "title":"data",
        "pannelData":{
          "revenues":this.itemInfos.data.revenue,
          "employees":this.itemInfos.data.employees
        }
      }
    ];
    return this.tabsItems;

  }
  
}
