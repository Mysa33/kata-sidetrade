import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare const google: any;
@Component({
  selector: 'app-maps',
  template:`
  <div style="margin-bottom:75px;">
    <h5>Address :</h5>
    <div id="map" style="width:100%;height:450px;"></div>
  </div>
  `,
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  @Input() loc:any;
  @Input () itemInfos:any;

  ngOnInit() {
  }
  
  ngAfterViewInit() {

    this._initMap(this.loc, this.itemInfos);

  }

  private _initMap(loc:any, itemInfos:any) {
    
    this.itemInfos = itemInfos;
    this.loc = loc;
    var imgAttr = this.itemInfos.officialName;
    var imgSrc = this.itemInfos.profilePictureUrl;
    var city = this.itemInfos.address.city;
    var latitude = parseFloat(this.loc.lat);
    var longitude = parseFloat(this.loc.lng);
    var address = {lat: latitude, lng: longitude};
    var template = '<div class="card">'+
      '<div style="height:auto;">'+
      '<img src='+ imgSrc +' class="card-img-top" alt='+ imgAttr +' style="width:150px;height:auto;">'+
      '</div>'+
      '<hr>'+
      '<div class="card-body" style="padding:0px;">' +
      '<strong style="padding-left:0px;">'+ 
      imgAttr +
      '</strong>'+
      '<br>'+
      '<div style="padding-bottom:10px;">City : '+ city +'</div>'
      '</div>'+
      '</div>'
    ;
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 11, center: address, mapTypeControl: false, streetViewControl: false});
    var marker = new google.maps.Marker({position: address, map: map});
    var infowindow = new google.maps.InfoWindow({
      content: template
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  }  
  


}