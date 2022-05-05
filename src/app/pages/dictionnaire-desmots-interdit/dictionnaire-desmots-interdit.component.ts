import { Component, OnInit } from '@angular/core';
import { DictionairedesMotsService } from 'src/app/shared/dictionairedes-mots.service';
import{dic} from 'src/app/model/DictionnaireDesMotInterdir'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-dictionnaire-desmots-interdit',
  templateUrl: './dictionnaire-desmots-interdit.component.html',
  styleUrls: ['./dictionnaire-desmots-interdit.component.css']
})
export class DictionnaireDesmotsInterditComponent implements OnInit {


  listmot:dic[]=[];
dictionnair:dic;
  constructor(private service:DictionairedesMotsService,private _router:Router) { }
  public onOpenModal1(dictionnaire: dic, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMissionModal');
    }
    if (mode === 'edit') {
      this.dictionnair = dictionnaire;
      button.setAttribute('data-target', '#updateMissionModal');
    }
    if (mode === 'delete') {
      this.dictionnair = dictionnaire;
      button.setAttribute('data-target', '#deleteMissionModal');
    }
    container.appendChild(button);
    button.click();
  }


  addmotq(){
    this.service.adddic(this.dictionnair).subscribe(()=>this._router.navigateByUrl("/home/listuser"));
    }
    public onDeletepost(id: number): void {
      
      this.service.deletemot(id).subscribe({
        next: (response: void) => {
          console.log(response);
          this.getmot();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
        complete: () => {
          console.log('complete');
        }
      });
    }
    public onDeletemot(id: number): void {
      
      this.service.deletemot(id).subscribe({
        next: (response: void) => {
          console.log(response);
          this.getmot();
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

this.getmot();

    this.service.getAllmots().subscribe(res=>{console.log(res); 
      this.listmot=res});
  
    }
    public getmot(): void {
      this.service.getAllmots().subscribe({
        next: (response: dic[]) => {
          this.listmot = response;
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
}
