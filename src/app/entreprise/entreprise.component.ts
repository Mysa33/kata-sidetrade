import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { DataShareService } from '../shared/services/data-share.service';

@Component({
  selector: 'app-entreprise',
  template: `
    <div class="container entreprise-container">
        <div class="row">
          <div class="col-lg-12">   
            <span><h4 class="page-title">Company infos :</h4> </span>
          </div>
          <div class="col-lg-3 company-img">
            <img src="{{item.profilePictureUrl}}" class="card-img-top" alt="{{item.officialName}}">
          </div>
          <div class="col-lg-9 company-infos">
            <div class="col-lg-12">
              <span class="company-title">Commercial name :</span>
              <span class="company-data">
                {{item.officialName}}
              </span>
            </div>
            <div class="col-lg-12">
              <span class="company-title">Company ID : </span>
              <span class="company-data">{{id}}</span>
            </div>

            <div class="col-lg-12">
              <span class="company-title">City : </span>
              <span class="company-data">{{item.address.city}}</span>
            </div>

            <div class="col-lg-12">
              <span class="company-title">NAF : </span>
              <span>{{item.naf.id}}</span>
              <span> /</span>
              <span class="naf-label">{{item.naf.label}}</span>
            </div>

            <div class="col-lg-12 company-description">
              <app-tabs [itemInfos] = "item"></app-tabs>
            </div>

          </div>
        </div>
    </div>
    <div class="container-fluid brand-maps-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <app-maps [loc] = "item.cordinates" [itemInfos] = "item"></app-maps>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {
  
  public id: string;
  public data:any[] ;
  public item;
  public brandLocation:object;
  public loc:object;
  public itemInfos:any;

  constructor(private _route: ActivatedRoute, private _shareData:DataShareService) { }

  ngOnInit() {
    
    this.getId();
    this.getSharedData ();
    this.setItem (this.data, this.item, this.id);
    console.log("item :", this.item.profilePictureUrl);

  }

  getId ():string {

    this.id = this._route.snapshot.paramMap.get('id');
    return this.id;

  }

  getSharedData ():any[] {

    this.data = this._shareData.storage;
    console.log("this.data ", this.data );
    return this.data;

  }

  setItem (data:any[], item:any[], id:string): object {

    this.data = data;
    this.item = item;
    this.id = id;
    var elementIndex = this.data.map(x =>{return x.companyId; }).indexOf(this.id);
    this.item = this.data[elementIndex];
    
    return this.item;

  }
  

}
