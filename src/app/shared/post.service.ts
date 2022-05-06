import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../model/post';
import { commentaire } from '../model/commentaire';
import { react } from '../model/React';
@Injectable({
  providedIn: 'root'
})
export class PostService {
 usersUrl="http://localhost:8082/listePost";
  constructor(private _http:HttpClient) { }

  getUsersName() : Observable<post[]> {
    return this._http.get<post[]>(this.usersUrl);
    }

    getAllpost() : Observable<post[]>{
    
     return this._http.get<post[]>("http://localhost:8082/listePost");
      }

 deletepost(id:number){
 return this._http.delete<void>("http://localhost:8082/delate/"+id);
}

 addpost(post:post){
 return this._http.post<post>("http://localhost:8082/ajoutpost/",post);
}
getcommentairebypost(idp:number) : Observable<commentaire[]>{
    
return this._http.get<commentaire[]>("http://localhost:8082/listcom/"+idp);
}

getbrstpost() : Observable<post>{
    
return this._http.get<post>("http://localhost:8082/best");
}

addpost1(post:post,id:number,idTag:number){
return this._http.post<post>("http://localhost:8082/ajoutpost/"+id+"/"+idTag,post);
}
              


chat(){
return this._http.get<void>("http://localhost:8082/");
}
  
  
 reacter(rea:react,id:number,idp:number){
return this._http.post<react>("http://localhost:8082/react/"+id+"/"+idp,rea);
}
addcommentaire(comentaire:commentaire,id:number,idp:number){
return this._http.post<commentaire>("http://localhost:8082/ok/"+id+"/"+idp,comentaire);
}
getnbredereact(id:number) : Observable<number>{
return this._http.get<number>("http://localhost:8082/reac/"+id);
}
  
getcomment(id:number) : Observable<string[]>{
      
return this._http.get<string[]>("http://localhost:8082/comment/"+id);
 }
 getpstdemem(id:number) : Observable<post[]>{
    
return this._http.get<post[]>("http://localhost:8082/people/"+id);
 }
      getpstdetag(s:string) : Observable<post[]>{
    
  return this._http.get<post[]>("http://localhost:8082/tag/"+s);
}
  
}
