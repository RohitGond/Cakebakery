import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import {ActivatedRoute, Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
// import { threadId } from 'node:worker_threads';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {};
 
  constructor(private ls: LoginServiceService ,
     private route : Router,
       private http : HttpClient,
        private routes : ActivatedRoute,
        private toast : ToastrService) {
          // this.user.email = this.routes.snapshot.params['email'];
       
        }
message : any;
  ngOnInit(): void {}
  login() {
    
    if (!this.user.email || !this.user.password)
    alert('Please fill all the field');
    if(! this.ls.ValidateEmail(this.user.email) )
    return;
  var apiurl = 'https://apifromashu.herokuapp.com/api/login';

  this.http.post(apiurl, this.user).subscribe(
    (response: any) => {
      console.log('response from signup api', response);
      this.message = response.message;
      
     
      if (this.message !== 'Invalid Credentials') {
        this.toast.success(response.message, 'login successful');
       
        this.message = '';
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('password', this.user.password);
         localStorage.setItem('token', response.token);

        this.route.navigate(['/']);
      } else {
        return;
      }
    },
    (error) => {
      console.log('Error from signup api', error);
    }
  );

  }
  
}
