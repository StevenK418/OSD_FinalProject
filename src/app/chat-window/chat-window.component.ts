import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent{

  isChatVisible:boolean = false;

  user: String;
  room: String;
  
  // tslint:disable-next-line:ban-types
  messageText: String;
  messageArray: Array<{user: String , message: String }> = [];
  constructor(private instantChatservice: ChatServiceService){
   
    this.instantChatservice.newUserJoined()
      .subscribe(data => this.messageArray.push(data));


    this.instantChatservice.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this.instantChatservice.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }

  join(){
      this.instantChatservice.joinRoom({user: this.user, room: this.room});
  }

  leave(){
    this.instantChatservice.leaveRoom({user: this.user, room: this.room});
  }

  sendMessage()
  {
    this.instantChatservice.sendMessage({user: this.user, room: this.room, message: this.messageText});
  }

  //Open and close chat
  toggleChatWindow()
  {
    this.isChatVisible = !this.isChatVisible;
  }

}
