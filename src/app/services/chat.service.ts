import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { ApiAiClient } from "api-ai-javascript";

@Injectable()
export class ChatService {

  private token = '7089027a8ba24f398de7b243469b2bcb';
  private client = new ApiAiClient({accessToken: this.token});

  private subject = new Subject<any>();

  constructor() { }

  talk(query) {
    this.client.textRequest(query)
      .then(response=>{
        if (response.result.fulfillment.speech=='') {
          this.subject.next('ขอโทษครับ ตอนนี้ผมยังไม่เข้าใจที่คุณถามนะครับ');
        } else {
          this.subject.next(response.result.fulfillment.speech);
        }
      })
      .catch(err=>{
        this.subject.next(err);
      });
  }

  // Observable
  observeBotResponse(): Observable<any> {
    return this.subject.asObservable();
  }

}
