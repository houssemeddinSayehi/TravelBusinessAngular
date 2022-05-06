import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dic } from '../model/DictionnaireDesMotInterdir';

@Injectable({
  providedIn: 'root'
})
export class DictionairedesMotsService {


  constructor(private _http:HttpClient) { }

  getAllmots() : Observable<dic[]>{
    
    return this._http.get<dic[]>("http://localhost:8082/mots");
     }


     adddic(dictionairedesmot:dic){
      return this._http.post<dic>("http://localhost:8082/dic/",dictionairedesmot);
      }
    deletemot(id:number){
        return this._http.delete<void>("http://localhost:8082/delated/"+id);
        }
}
