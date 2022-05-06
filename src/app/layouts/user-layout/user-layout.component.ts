import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { commentaire } from 'src/app/model/commentaire';
import { post } from 'src/app/model/post';
import { react } from 'src/app/model/React';
import { Tag } from 'src/app/model/tag';
import { user } from 'src/app/model/user';
import { PostService } from 'src/app/shared/post.service';
import { TagService } from 'src/app/shared/tag.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class userLayoutComponent implements OnInit {
 

<<<<<<< HEAD
  totallength:any;
  page:number=1;
  showpost:any=[];
=======
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
  user :user =new user();
   p :post=new post();
   com:string;
    listPost : post[]=[];
    listPost1 : post[]=[];
    co:string[];
    idp:number;
    id:number;
    comment:commentaire=new commentaire();
    rea:react=new react();
    listCommentaire: commentaire[]=[];
  i:number;
   public commentaire:commentaire=new commentaire();
    data : Date = new Date();
    selectedFile: ImageSnippet;
    public post:post=new post();
    submitted = false;
    userFile: any;
    message: string;
    imagePath: any;
    imgURL: string | ArrayBuffer;
   idTag:number;
    x:number;
<<<<<<< HEAD
    posts:post;
  rating3: number;
  tagg: Tag[];
  listComme: string[];
  constructor(private _service:PostService,private _router:Router,private service: NotificationsService,private serv: TagService) {
   
   }
  reacter(idp:number,id:number,){
=======
  rating3: number;
  tagg: Tag[];
  posts: post;
  totallength: number;
  constructor(private _service:PostService,private _router:Router ,private serv: TagService,private service: NotificationsService) {
   
   }
   reacter(idp:number,id:number,){
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
    this.id=1;
    this.idp=idp;
    this.rea.react="adore";
    this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
    window.location.reload();
    }
    jaime(idp:number,id:number,){
        this.id=1;
        this.idp=idp;
        this.rea.react="aime";
        this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
        window.location.reload();
        }
    triste(idp:number,id:number,){
            this.id=1;
            this.idp=idp;
            this.rea.react="triste";
            this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
            window.location.reload();
            
            }
<<<<<<< HEAD
    facher(idp:number,id:number,){
                this.id=1;
                this.idp=idp;
                this.rea.react="facher";
                this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
                this.onerrur("errur");

                }
=======
   
   
            facher(idp:number,id:number,){
              this.id=1;
              this.idp=idp;
              this.rea.react="facher";
              this._service.reacter(this.rea,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
              this.onerrur("errur");

              }
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
                public gettag(): void {
                  this.serv.getAlltag().subscribe({
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
<<<<<<< HEAD
    commnenter(idp:number,id:number,com:string){
                this.id=1;
                this.idp=idp;
                this.comment.description=com;
                this._service.addcommentaire(this.comment,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
                window.location.reload();
                this.onSucesss("sucesss");
                }

                public getpost(): void {
                  this._service.getbrstpost().subscribe({
                    next: (response: post) => {
                      this.posts = response;
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
                addpost1(id:number,idTag:number){
=======
   
                commnenter(idp:number,id:number,com:string){
                  this.id=1;
                  this.idp=idp;
                  this.comment.description=com;
                  this._service.addcommentaire(this.comment,this.id,this.idp).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
                  window.location.reload();
                  this.onSucesss("sucesss");
                  }

                  addpost1(id:number,idTag:number){
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
                    this._service.addpost1(this.post,this.id,this.idTag).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
                    this.onSucesss("sucesss"); 
                  }

<<<<<<< HEAD


    ficher(co:number)
   {
    this._service.getcomment(co).subscribe(res=>{console.log(res); 
      this.listComme=res});
     }
                    retrievecomment(id:number){
                        this._service.getcomment(id).subscribe(res=>{console.log(res); 
                            this.co=res
                            
                          });                            }

                          getcomm(idp:number)
                          {
                            this._service.getcommentairebypost(idp).subscribe(res=>{console.log(res); 
                              this.listCommentaire=res});
                            }
                          
=======
                    retrievecomment(id:number){
                        this._service.getcomment(id).subscribe(res=>{console.log(res); 
                            this.co=res
                          });                            }
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
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
<<<<<<< HEAD
                      
=======
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
  ngOnInit() {  this._service.getAllpost().subscribe(res=>{console.log(res); 
    this.listPost=res
    this.totallength=res.length;
  });
  this.gettag();
    this._service.getnbredereact(this.id).subscribe(res=>{console.log(res); 
      this.x=res
      this.onSucesss("sucesss"); 
    });
  }
<<<<<<< HEAD

  onSucesss(message){
    this.service.success('sucess', 'Click to undo...', {
      timeOut: 3000,
      position:['bottom','right'],
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
   }
   onerrur(message){
    this.service.error('error', 'Click to undo...', {
      timeOut: 3000,
      position:['bottom','right'],
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
   }
   

   afficher(s:string)
{
  this._service.getpstdetag(s).subscribe(res=>{console.log(res); 
    this.listPost=res});

    this.onSucesss("sucesss"); 
  }

   postbytag(id:number){
      this._service.getpstdemem(id).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
    window.location.reload();
    this.onSucesss("sucesss"); 
    }
=======
  public getpost(): void {
    this._service.getbrstpost().subscribe({
      next: (response: post) => {
        this.posts = response;
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
  
      this.onSucesss("sucesss"); 
    }
  
     postbytag(id:number){
        this._service.getpstdemem(id).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
      window.location.reload();
      this.onSucesss("sucesss"); 
      }


      onSucesss(message){
        this.service.success('sucess', 'Click to undo...', {
          timeOut: 3000,
          position:['bottom','right'],
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
       }
       onerrur(message){
        this.service.error('error', 'Click to undo...', {
          timeOut: 3000,
          position:['bottom','right'],
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
       }
       
>>>>>>> 20b1c640b891393d1088c9309b700e8d5febdc5a
}
