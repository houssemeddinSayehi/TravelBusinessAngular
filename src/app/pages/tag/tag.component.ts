import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/model/tag';
import { TagService } from 'src/app/shared/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
tag :Tag=new Tag();

tagg:Tag[];


  constructor(private service:TagService,private _router:Router) { }
  public onOpenModal1(tagg: Tag, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMissionModal');
    }
    if (mode === 'edit') {
      this.tag = tagg;
      button.setAttribute('data-target', '#updateMissionModal');
    }
    if (mode === 'delete') {
      this.tag = tagg;
      button.setAttribute('data-target', '#deleteMissionModal');
    }
    container.appendChild(button);
    button.click();
  }


  addtag(){
    this.service.addtag(this.tag).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
    }
    public onDeletepost(id: number): void {
      
      this.service.deletetag(id).subscribe({
        next: (response: void) => {
          console.log(response);
          this.gettag();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
        complete: () => {
          console.log('complete');
        }
      });
    }
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
  ngOnInit(): void {
    this.gettag();
  }

}
