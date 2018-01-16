import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatboxService {
  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private http: Http) { }

  message = {
    msg: ''
  };

  converse(msg: any) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    this.message.msg = msg;
    this.http.post('/api/chatbot', this.message).subscribe(
      (response) => {
        //console.log(response.json());
        const botMessage = new Message(response.json().text[0], 'bot');
        this.update(botMessage);
      },
      (error) => console.log(error)
    );
  }


  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
}