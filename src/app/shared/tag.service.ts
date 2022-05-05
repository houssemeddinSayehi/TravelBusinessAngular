import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor( private http:HttpClient) { }

  getAlltag() : Observable<Tag[]>{
    
    return this.http.get<Tag[]>("http://localhost:8082/tag");
     }

     deletetag(id:number){
       return this.http.delete<void>("http://localhost:8082/tag/"+id);
       }

       addtag(Tag:Tag){
         return this.http.post<Tag>("http://localhost:8082/addtag/",Tag);
         }
     
}
