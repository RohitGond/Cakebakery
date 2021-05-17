import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { request } from 'node:http';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {


  constructor() { }
  intercept(request : HttpRequest<any>, next : HttpHandler){
    // alert('ja rha hai interceptor me');
    if(localStorage.token){

      request = request.clone({setHeaders : {authtoken : localStorage.token}})
    }
    return next.handle(request);
  }
}
