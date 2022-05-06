import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { commentaire } from 'src/app/model/commentaire';
import { post } from 'src/app/model/post';
import { react } from 'src/app/model/React';
import { user } from 'src/app/model/user';
import { PostService } from 'src/app/shared/post.service';
import { HttpErrorResponse } from '@angular/common/http';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class commentComponent implements OnInit {
<<<<<<< HEAD
  @Input() c:number;
=======
  @Input() co:number;
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
  listCommentaire: string[];

  constructor(private _service:PostService,private _router:Router) {
  
   }
  
<<<<<<< HEAD
   afficher(c:number)
   {
    this._service.getcomment(c).subscribe(res=>{console.log(res); 
      this.listCommentaire=res});
     }
     
  ngOnInit(): void {
    this.afficher(this.c);
=======
   afficher(co:number)
   {
     this._service.getcomment(co).subscribe(res=>{console.log(res); 
       this.listCommentaire=res});
     }
  ngOnInit(): void {
    this.afficher(this.co);
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
}
}
