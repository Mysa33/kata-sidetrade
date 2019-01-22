import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid header-wrapper">
      <div class="container">
        <app-nav></app-nav>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  

  constructor (  ) {}
  
  ngOnInit () {

  }

}
