import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SendEmailService {

  constructor(private http: Http) { }

  sendEmailForDemo(user:any) {
    return this.http.post('/api/email/request', user);
    //console.log(user);
  }
  
  sendEmailForBeta(user:any) {
    return this.http.post('/api/email/beta', user);
  }

  sendEmailForContact(user:any) {
    console.log('send email contact');
    return this.http.post('/api/email/contact', user);
  }

}