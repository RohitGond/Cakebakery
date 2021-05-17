import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  user: any = {};
  constructor( private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  getPass() {
     console.log(this.user);
     const apiUrl = "https://apibyashu.herokuapp.com/api/recoverpassword";
     this.http.post(apiUrl,this.user).subscribe(
       (response: any)=>{console.log(response)
       this.router.navigate(["/login"]);},
       (error)=> {console.log(error);
        
     });
    
  }
}
