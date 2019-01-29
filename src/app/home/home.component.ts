import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import { DataShareService } from '../shared/services/data-share.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="container home-container">

      <div class="row search-row">
        <!-- .col-lg-4 -->
        <div class="col-lg-4">
          <!-- .input-group -->
          <div class="input-group mb-3">    
            <input type="search" class="form-control" [(ngModel)]="queryString" placeholder ="Rechercher par entreprise">          
            <!-- .input-group-append -->
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="material-icons">search</i>
              </span>
            </div>
            <!-- /.input-group-append -->
          </div>
          <!-- /.input-group -->
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-8">
          <div class="float-right btn-wrapper">
            <i class="material-icons" (click)="showLess();">
              remove_circle
            </i>
            <i class="material-icons btn-icon" (click)="showMore();">
              add_circle
            </i>
          </div>
        </div>
      </div>

      <div class="row entreprises-row">

        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 company-wrapper" *ngFor="let item of  dataJson | filterData: queryString : 'officialName' | slice:0:itemsNb; let i = index">
          <div class="card" style="width: 18rem;" >
            <div class="item-img-wrapper">
              <img src="{{item.profilePictureUrl}}" class="card-img-top" alt="{{item.officialName}}">
            </div>
            <hr>
            <div class="card-body">
              <h5 class="card-title" *ngIf = "item.shortOfficialName">
                {{item.shortOfficialName}}
              </h5>
              <h5 class="card-title" *ngIf = "item.officialName && !item.shortOfficialName">
                {{item.officialName}}
              </h5>
              <a [routerLink]="['/entreprise', item.companyId]" id={{i}} class="btn">
                <i class="material-icons">
                  play_circle_filled
                </i>
                <span>
                  Read more
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dataJson:any[];
  public sharedData:any[];
  public total:number;
  public items:any[];
  public itemsNb:number;
  
  constructor( private _dataService:ApiService, private _shareData:DataShareService ) { }

  ngOnInit() {

    this.itemsNb = 10;
    this.getData();

  }
  
  getData():any{

    this._dataService.getData().subscribe(
      data =>{
        this.dataJson = Object.values(data);
        this.total = this.dataJson[0];  
        this.dataJson = this.dataJson[1];
        this.setItem (this.dataJson);
        this.shareItems (this.dataJson);
      },
      err => console.error(err),
      () => console.log('done loading data')
    );

  }

  shareItems(data:any[]) {
    
    this._shareData.storage = this.dataJson;

  }

  showMore(itemtsNb:number):number {
    
    return this.itemsNb = 20;

  }

  showLess(itemsNb:number): number {
    
    return this.itemsNb = 10;

  }

  setItem (dataJson:any[]):any[] {
    
    let tronc:string = "...";
    let limit:number = 20;
    for (let i in this.dataJson){
      let title = this.dataJson[i].officialName;
      let titleLength = title.length;
      if (titleLength > limit) {
        title = title.substr(0,16)
        this.dataJson[i].shortOfficialName = title.concat("", tronc);
      }
    }
    return this.dataJson
  }

}
