import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar nav-custom">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link custom-link-icon" routerLink="/home">
            <i class="material-icons" style="font-size: 1.6em!important;font-weight: 200!important;color:#43b8d0!important;">
              home
            </i>
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link home-link" routerLink="/home" routerLinkActive="active">Home</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
