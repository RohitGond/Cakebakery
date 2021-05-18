import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor() {}
  ValidateEmail(inputText:any)
  {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.match(mailformat))
  {
  
  
  return true;
  }
  else
  {
  alert("Please! enter the valid mail id");

  return false;
  }
  }


  
}
