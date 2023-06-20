import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  isEnabled:boolean=false;
  m:any="more";
  post:any=[{
    "name":"Louis" ,
    "team":"TNP France",
    "time":12,
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au",
    "tags":["Tnp","france","hope"],
    "likes": 9,
    "comments":6 ,
    "showFull":false,
    "liked":false
    }];


    more()
    {
   this.isEnabled=!this.isEnabled
   
  
    }
  }
