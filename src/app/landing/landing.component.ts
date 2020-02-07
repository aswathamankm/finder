import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }
  public users:Array<any>=[];
  ngOnInit() {
    this.allusers();
  }
  //get all user function
  allusers(){
    this.userservice.Getallusers().subscribe(res=>{
      //console.log(res.json())
      this.users = res.json();
    })
  }
  //search bar function
  search(e){
    if(e != null && e != undefined && e != ''){
      this.userservice.Getallusers().subscribe(res=>{
        //console.log(res.json())
        this.users = res.json();
        //console.log(e)
        //console.log(this.users.filter(item => item.login.search(new RegExp(e, 'i')) > -1));
        this.users = this.users.filter(item => item.login.search(new RegExp(e, 'i')) > -1)
      })
    }
    else{
      this.allusers();

    }

  }
  //user is clikcked or card is clicked
  userclick(user){
    //console.log(user.login)
    this.router.navigate(['landing/user-details',user.login]);
  }
  //got home page
  gohome(){
    this.router.navigate(['/home'])
  }
}
