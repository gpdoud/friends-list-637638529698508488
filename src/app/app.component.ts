import { Component } from '@angular/core';
import { Friend } from './friend.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  friends: Friend[] = [
    new Friend("Alan", 33, "alan@friend.com", false),
    new Friend("Barb", 34, "barb@friend.com", false),
    new Friend("Chris", 35, "chris@friend.com", true),
    new Friend("Darlene", 36, "darlene@friend.com", true),
    new Friend("Ed", 37, "ed@friend.com", false)
  ];
  btnColor: string = "btn btn-danger";

}
