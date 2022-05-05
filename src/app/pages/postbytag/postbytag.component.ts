import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatMessageDto } from 'src/app/model/chatMessageDto';
import { post } from 'src/app/model/post';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-postbytag',
  templateUrl: './postbytag.component.html',
  styleUrls: ['./postbytag.component.css']
})
export class postbytagComponent implements OnInit {
 
 
  listPost : post[]=[];
  public post:post=new post();
  constructor(private _service:PostService,private _router:Router) { }

  ngOnInit(): void {
    this._service.getpstdemem(1).subscribe(res=>{console.log(res); 
      this.listPost=res
  })
 

  }
}