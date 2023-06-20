import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showhome:any;
  showcommunity:any;
  showevents:any;
  hoverOrClick:any={
    "home": true,
    "community":false,
    "events":false
  };
  selected(selection:any){
    this.hoverOrClick={"home":false,"community":false,"events":false}

  
  this.hoverOrClick[selection]=true

}
}
