import { Component, Injectable, VERSION } from "@angular/core";
import { of, interval, timer } from "rxjs";
import { map, tap, timeout, timeoutWith } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class NotificationService {
  upcomingEvents: Events[] = [
    { eventId: 1, eventName: "Event 1", eventTime: 3000, isAlaramed: false },
    { eventId: 2, eventName: "Event 2", eventTime: 4000, isAlaramed: false }
  ];
  constructor() {
    debugger;
    this.upcomingEvents.forEach(event => {
      const cmgEvent$ = timer(event.eventTime);
      cmgEvent$.subscribe(val => {
        console.log(event.eventName + " : Started : " + event.eventTime);
        console.log(val);
      });
    });
  }
}
export interface Events {
  eventId: number;
  eventName: string;
  eventTime: number;
  isAlaramed: boolean;
}
