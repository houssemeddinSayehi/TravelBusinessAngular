import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/settings', title: 'settings',  icon:'ni-single-02 text-yellow', class: '' },
 


  { path: '/tag', title: 'tag',  icon:'ni-bullet-list-67 text-red', class: ''},
];

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  constructor(  private userService: UserService
    ) {}
  
    currentUser: User;
  
    ngOnInit() {
      this.userService.currentUser.subscribe(
        (userData) => {
          this.currentUser = userData;
        }
      );
    }
}
