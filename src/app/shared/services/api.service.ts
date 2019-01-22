import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url : string = "assets/data/search.json";

  constructor( private _http:HttpClient ) { }
  
  getData() {
    return this._http.get(this._url);
  }

}
