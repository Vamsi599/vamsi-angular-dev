import { Component, OnInit } from "@angular/core";
import { NotificationService } from "../notifications/notifications.service";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"]
})
export class AuthenticationComponent implements OnInit {
  constructor(private events: NotificationService) {}

  ngOnInit() {
    // this.events = new NotificationService();
  }
}
