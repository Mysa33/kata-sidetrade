import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() { }
  
  initNav ():object {

    var parentNode:any;
    var elmnts:any;
    var activeElmnt:any;
    parentNode = document.getElementById('pannelsWrapper');
    elmnts = parentNode.getElementsByClassName("tabs-nav-item");
    activeElmnt = document.querySelector("#tab_0");
    activeElmnt.classList.add("active");
    return activeElmnt;

  }

  initPannels ():object {

    var parentNode:any;
    var elmnts:any;
    var activePannel:any;
    parentNode = document.getElementById('pannelsWrapper');
    elmnts = parentNode.getElementsByClassName("pannel-wrapper");
    activePannel = document.querySelector("#pannel_0");
    for (let i = 0; i < elmnts.length; i++) {
      elmnts[i].classList.add('hidden-pannel');
    }
    activePannel.classList.remove("hidden-pannel");
    activePannel.classList.add("visible-pannel");
    return activePannel;

  }

}
