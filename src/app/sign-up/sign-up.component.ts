import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

})
export class SignupComponent implements OnInit {
  user: any = {};
  constructor(private ls: LoginServiceService, private http: HttpClient, private router: Router ) {}

  ngOnInit(): void {}
  message:any;
  signUp() {
    // if (this.ls.validateEmail(this.user.email)) alert('Correct Email');
    // else alert('Invalid Email');
    const apiUrl = "https://apibyashu.herokuapp.com/api/register";
    this.http.post(apiUrl, this.user, {observe: 'response'}).subscribe(
      (response: any)=>{console.log(response)
      this.message = response.message},
      (error)=> {console.log(error);
        this.router.navigate(["/login"]);
    });
  }
}
