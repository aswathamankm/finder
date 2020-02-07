import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public Domain = 'https://api.github.com';
  constructor(private http:Http) { }
  //Get all user details
  Getallusers(){
    return this. http.get(this.Domain+'/users');
  }
  //get user repositeries
  getuserrepos(data){
    return this. http.get(this.Domain+'/users/'+data+'/repos');

  }
}
