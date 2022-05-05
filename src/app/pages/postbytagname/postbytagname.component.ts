import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatMessageDto } from 'src/app/model/chatMessageDto';
import { post } from 'src/app/model/post';
import { Tag } from 'src/app/model/tag';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { PostService } from 'src/app/shared/post.service';
import { TagService } from 'src/app/shared/tag.service';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Users',  icon:'ni-bullet-list-67 text-red', class: '' },
  { path: '/missions', title: 'Missions',  icon:'ni-bullet-list-67 text-red', class: ''},
  { path: '/travelprogram', title: 'Travel Programs',  icon:'ni-bullet-list-67 text-red', class: ''},
  { path: '/post', title: 'post',  icon:'ni-bullet-list-67 text-red', class: ''},
  { path: '/motsinterdit', title: 'motsinterdit',  icon:'ni-bullet-list-67 text-red', class: ''},


  { path: '/tag', title: 'tag',  icon:'ni-bullet-list-67 text-red', class: ''},
];

@Component({
  selector: 'app-postbytagname',
  templateUrl: './postbytagname.component.html',
  styleUrls: ['./postbytagname.component.css']
})
export class postbytagnameComponent implements OnInit {
 /* public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }*/ 
  public menuItems: any[];
  public isCollapsed = true;
  listPost : post[]=[];
  public post:post=new post();
  tagg: Tag[];
  constructor(private service:TagService, private _service:PostService ,private _router:Router) { }
  public gettag(): void {
    this.service.getAlltag().subscribe({
      next: (response: Tag[]) => {
        this.tagg = response;
        console.log(response);
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

afficher(s:string)
{
  this._service.getpstdetag(s).subscribe(res=>{console.log(res); 
    this.listPost=res});
  }

  ngOnInit(): void {
    this.gettag();
    this._service.getpstdemem(1).subscribe(res=>{console.log(res); 
      this.listPost=res
  })
 
  this.menuItems = ROUTES.filter(menuItem => menuItem);
    this._router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}