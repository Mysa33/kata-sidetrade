import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <ul id="tabsNav" class="nav nav-tabs">
      <li id ="tab_{{i}}" class="nav-item tabs-nav-item" *ngFor = "let item of tabsItems; let i = index" (click) = "toggleTab(i);">
        <a class="nav-link">
          <h6>
            {{item.title}} : 
          </h6>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input () itemInfos:any;
  public tabsItems:any[];
  public hiddenTabs:any[];

  constructor() { }

  ngOnInit() {

    this.setTabs (this.itemInfos, this.tabsItems);

  }

  setTabs (itemInfos:any, tabsItems:object):object {
    
    this.tabsItems = [
      {
        "title":"description",
        "data":this.itemInfos.description
      },
      {
        "title":"data",
        "data":this.itemInfos.data
      }
    ];
    this._initTabs ();
    return this.tabsItems;
  }

  toggleTab (i:number):object {
    
    var idsArray:any[] = [];
    var hiddenTabs:any[] = [];
    var elmntId = "tab_" + i;
    var parentNode = document.getElementById("tabsNav");
    var elmnt:any = document.getElementById(elmntId);
    var elmnts = parentNode.querySelectorAll('li');
    for (var i = 0; i < elmnts.length; i++) {
      elmnts[i].classList.remove('active')
    }
    elmnt.classList.add("active");
    return;
  }

  private _initTabs ():object {

    var parentNode:any;
    var elmnts:any;
    var activeElmnt:any;
    parentNode = document.getElementById('tabsNav');
    elmnts = parentNode.getElementsByClassName("tabs-nav-item");
    activeElmnt = document.getElementById("tab_0");
    console.log("activeElmnt:", activeElmnt);
    //activeElmnt.classList.add("active");
    return;
  }
  
}
