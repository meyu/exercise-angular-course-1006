import { Injectable } from '@angular/core';

@Injectable()
export class NotifyService {

  constructor() { }


  //係參考 Web APIs 的 Notifications API 之做法：https://developer.mozilla.org/zh-TW/docs/Web/API/notification
  pop(title: string, message: string, iconUrl: string, needInteract: boolean) {
    Notification.requestPermission().then(function (result) {
      console.log(result);
    });
    var options = {
      body: message,
      icon: iconUrl,
      requireInteraction: needInteract
    }
    var n = new Notification(title, options);
  }
}
