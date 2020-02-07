import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private actroute: ActivatedRoute,private userservice:UserService,private router:Router) { }

  ngOnInit() {
    this.getuserrepos();
  }
  respostary:Array<any>=[];
  respostary_owner;
  //get user Repositories
  getuserrepos(){

    //console.log(this.actroute.params['value'])

    this.userservice.getuserrepos(this.actroute.params['value']['name']).subscribe(res=>{
      //console.log(res.json())
      //console.log(res.json()[0]['owner'])
      this.respostary = res.json();
      this.respostary_owner = res.json()[0]['owner']
    })
  }
  //go home page
  gohome(){
    this.router.navigate(['/home'])
  }
  //got pervious page
  goback(){
    this.router.navigate(['/landing/user'])

  }
}
