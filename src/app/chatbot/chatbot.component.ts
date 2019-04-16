import { Component, OnInit, ElementRef, enableProdMode } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as d3 from 'd3';

import { ChatService } from '../services/chat.service';

enableProdMode();

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  private messages = [
    {content: 'ยินดีต้อนรับครับ ผมคือ chat bot ที่มาจาก DialogFlow มีอะไรถามผมได้ครับ', sentBy: 'bot'}
  ];
  private subscription: Subscription;

  private chatContainer;

  constructor(
    private elementRef: ElementRef,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatContainer = d3.select(this.elementRef.nativeElement).select('.chat-container');
    this.subscription = this.chatService.observeBotResponse().subscribe(content=>{
      this.messages.push({content: content, sentBy: 'bot'});
      this.scrollBottom();
    });
  }

  sendMessage(query) {
    if (query!='') {
      this.messages.push({content: query, sentBy: 'user'});
      this.scrollBottom();

      if (query.indexOf('เวลา')>-1) {
        let now = new Date(),
            content = 'ตอนนี้เวลา '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+' ครับ';
        this.messages.push({content: content, sentBy: 'bot'});
        this.scrollBottom();
      } else if (query.indexOf('วันที่')>-1) {
        let now = new Date(),
            content = 'วันนี้วันที่ '+now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear()+' ครับ';
        this.messages.push({content: content, sentBy: 'bot'});
        this.scrollBottom();
      } else {
        this.chatService.talk(query);
      }
    }
  }
  scrollBottom() {
    let scrollheight = this.chatContainer.property("scrollHeight");
    d3.timeout(()=>{
      document.getElementById('chat-container').scrollTop = scrollheight;
    }, 100);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
