import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid header-wrapper" style="box-shadow: 0px 2px 4px 1px #efefef; opacity:.8">
      <div class="container">
        <app-nav></app-nav>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public title:string;

  constructor (  ) {}
  
  ngOnInit () {

    this.title = "Kata Sidetrade";
    
  }

}
