import { Component, Injectable, VERSION } from "@angular/core";
import { of, interval, timer } from "rxjs";
@Injectable({ providedIn: "root" })
export class NotificationService {
  upcomingEvents: Events[] = [
    { eventId: 1, eventName: "Event 1", eventTime: 10000 },
    { eventId: 2, eventName: "Event 2", eventTime: 30000 }
  ];
  constructor() {
    debugger;
    this.upcomingEvents.forEach(event => {
      const cmgEvent$ = timer(event.eventTime);
      cmgEvent$.subscribe(val =>
        console.log(event.eventName + " : Started : " + event.eventTime)
      );
    });
  }
}
export interface Events {
  eventId: number;
  eventName: string;
  eventTime: number;
}
