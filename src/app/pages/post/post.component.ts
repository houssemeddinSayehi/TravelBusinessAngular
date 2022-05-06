import { Component, OnInit } from '@angular/core';
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
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class postComponent implements OnInit {
  totallength:any;
  page:number=1;
  showpost:any=[];
  public deletepost2: post;
  user :user =new user();
  p :post=new post();
  com:string;
   listPost : post[]=[];
   listPost1 : post[]=[];
   idp:number;
   id:number;
   comment:commentaire=new commentaire();
   rea:react=new react();
   listCommentaire: commentaire[]=[];
 i:number;
  public commentaire:commentaire=new commentaire();
   data : Date = new Date();

   pag = 4;
   page1 = 5;
   page2 = 3;
   focus;
   focus1;
   focus2;
co:String[];
   selectedFile: ImageSnippet;
   public post:post=new post();
   submitted = false;
   userFile: any;
   message: string;
   imagePath: any;
   imgURL: string | ArrayBuffer;
  idTag:number;
   x:number;

 
  constructor(private _service:PostService,private _router:Router) {
  
   }
   addpost1(id:number,idTag:number){
    this._service.addpost1(this.post,this.id,this.idTag).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
    }

    reacter(idp:number,id:number,){
      this.id=1;
      this.idp=idp;
      this.rea.react="adore";
      this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
      }
      jaime(idp:number,id:number,){
          this.id=1;
          this.idp=idp;
          this.rea.react="aime";
          this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
          }
      triste(idp:number,id:number,){
              this.id=1;
              this.idp=idp;
              this.rea.react="triste";
              this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
              }
      facher(idp:number,id:number,){
                  this.id=1;
                  this.idp=idp;
                  this.rea.react="facher";
                  this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
                  }

      commnenter(idp:number,id:number,com:string){
                  this.id=1;
                  this.idp=idp;
                  this.comment.description=com;
                  this._service.addcommentaire(this.comment,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
                  }


                 

                      retrievecomment(id:number){
                          this._service.getcomment(id).subscribe(res=>{console.log(res); 
                              this.co=res
                            });                            }
                    
    onSelectFile(event) {
      if (event.target.files.length > 0)
      {
        const file = event.target.files[0];
        this.userFile = file;
       // this.f['profile'].setValue(file);
    
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
    
      var reader = new FileReader();
      
      this.imagePath = file;
      reader.readAsDataURL(file); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
        this.post.fileName = ""+reader.result
      }
    }
    
    }
    public getpost(): void {
      this._service.getAllpost().subscribe({
        next: (response: post[]) => {
          this.listPost = response;
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
    public onDeletepost(id: number): void {
      
      this._service.deletepost(id).subscribe({
        next: (response: void) => {
          console.log(response);
          this.getpost();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
        complete: () => {
          console.log('complete');
        }
      });
    }
  ngOnInit(): void {
this.getpost();
  

/*this._service.getcommentairebypost(12).subscribe(res=>{console.log(res); 
    this.listCommentaire=res});*/
     this._service.getAllpost().subscribe(res=>{console.log(res); 
        this.listPost=res
      });
        

        

      for(this.i=0;this.i<this.listPost.length;this.i++){
        this._service.getcommentairebypost(this.listPost[this.i].id_Post).subscribe(res=>{console.log(res); 
          this.listCommentaire=res});
      }

        

}
deletepost(id:number){
  this._service.deletepost(id).subscribe(()=> this._service.getAllpost().subscribe(res=>{console.log(res); 
    this.listPost=res}));
  }
afficher(idp:number)
{
  this._service.getcommentairebypost(idp).subscribe(res=>{console.log(res); 
    this.listCommentaire=res});
  }

/*top()
{
  this._service.getbrstpost().subscribe(res=>{console.log(res); 
    this.listPost1=res});
  }*/
  public onOpenModal1(post: post, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMissionModal');
    }
    if (mode === 'edit') {
      this.post = post;
      button.setAttribute('data-target', '#updateMissionModal');
    }
    if (mode === 'delete') {
      this.deletepost2 = post;
      button.setAttribute('data-target', '#deleteMissionModal');
    }
    container.appendChild(button);
    button.click();
  }

  public onOpenModal2(post: post, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMissionAffectationModal');
    }
    if (mode === 'edit') {
      this.post = post;
      button.setAttribute('data-target', '#updateMissionAffectationModal');
    }
    if (mode === 'delete') {
      this.post = post;
      button.setAttribute('data-target', '#deleteMissionAffectationModal');
    }
    container.appendChild(button);
    button.click();
  }
}