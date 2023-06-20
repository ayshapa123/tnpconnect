import { Component } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  slicedArray:any=[];
  slicedArray1: any=[];
  show:Boolean=false;
  counter: number = 0;
  maxvalue:number=1;
  m:any="more";
  n:any="View all replies";
  l:any="Hide all comments"
  data:any;
  allcomment:Boolean=false;
  length1:number=1;
  isExpanded:Boolean=false;
  submittedComment: any;
  A:any;
  newreply:Boolean=false;
  viewless:Boolean[]=[];
  maxtoshow:number=1;
  commentview:Boolean=false
 
  // liked:Boolean=true;
  post:any=[{
    "name":"Louis" ,
    "team":"TNP France",
    "time":12,
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au",
    "tags":["#Tnp#france#hope"],
    "likes": 9,
    "allcomment":false,
    "fullcomment":1,
    "replyfull":false,
    "comments":
    [{"comment":"In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since",
    "commentname":"Anil",
    "likes":12,
    "commentliked":false,
    "fullreply":1,
    "showreplybutton":false,
    "replys":[{"reply":"haii","replyname":"Ram","replyliked":false,"likes":21,"showreplybutton":false},{"reply":"hello","replyname":"Anjali","replyliked":false,"likes":21,"showreplybutton":false}]
    },{
      "comment":"nice post",
    "commentname":"Rinesh",
    "likes":2,
    "commentliked":false,
    "fullreply":1,
    "showreplybutton":false,
    "replys":[{"reply":"wow","replyname":"Ram","replyliked":false,"likes":21,"showreplybutton":false},{"reply":"when","replyname":"Anjali","replyliked":false,"likes":21,"showreplybutton":false}]
    
  }
    ],
    "showFull":false,
    "liked":false
  },  
  {"name":"Neil" ,
    "team":"TNP America",
    "time":3,
    "content": "hope you all are fine and happ,gdygwydjwdbwduw, Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum au.rssaacvdcvsgajgcvsgvctsvcsgvcagvvxvfsio",
    "tags":["#America#hope#peace"],
    "likes": 70,
    "allcomment":false,
    "replyfull":false,
    "fullcomment":1,
    
    "comments":[
      {
        "comment": "comment1",
        "commentname":"george",
        "likes":2,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"sonu","replyliked":false,"likes":34,},{"reply":"ddg","replyname":"angel","replyliked":false,"likes":44},{"reply":"assghhj","replyname":"henson","replyliked":false,"likes":2}]
      },
      {
        "comment": "comment2",
        "commentname":"amal",
        "likes":42,
        "commentliked":false,
        "fullreply":1,
        "replys":[{"reply":"adfasdf","replyname":"john","replyliked":false,"likes":9}]
      }
    ] ,
    "showFull":false,
    "liked":false
    }];
  replys: any;
    toggleExpansion(i:any){
      this.post[i].isExpanded=!this.post[i].isExpanded
      if(this.post[i].isExpanded)
        this.m="less"
      else
       this.m="more"
    }
    thumbsup(p:any){
      this.post[p].liked=!this.post[p].liked;
       this.post[p].liked? this.post[p].likes+= 1:this.post[p].likes-= 1;
    }
    // Add new comments
    view(A:any,i:any)
    {
     const test= {"comment":`${A}`,
    "commentname":"Anil",
    "likes":12,
    "commentliked":false,
    "fullreply":1,
    "showreplybutton":false,
    "replys":[{"reply":"heyy","replyname":"Ram","replyliked":false,"likes":21,"showreplybutton":false},{"reply":"ooo","replyname":"Anjali","replyliked":false,"likes":21,"showreplybutton":false}]
    }
      this.post[i].comments.push(test);
      console.log(this.post[i]);
      this.commentview=!this.commentview
      
    }
    toggleallComments(i:any)
    {
      this.post[i].allcomment=!this.post[i].allcomment;
      if(this.post[i].allcomment)
        this.post.l="View all comments"
      else
        this.post.l="Hide all comments"
      // console.log(i);
    }
    onSubmit(){

    }
   
reply(i:any,j:any){
  this.post[i].comments[j].replyfull=!this.post[i].comments[j].replyfull
  if(this.post[i].comments[j].replyfull)
  this.n="Hide all replies"
  else
    this.n="View all replies"
    
    const replyLength = this.replys.length;
  console.log("Reply Length:", replyLength); 
  
}

// Add reply Function
justreply(){
  this.newreply=!this.newreply
}
replyadd(i:any,j:any)
{
  
 const replyadd1={
  "comment": "comment2",
  "commentname":"amal",
  "likes":42,
  "commentliked":false,
  "fullreply":1,
  "replys":[{"reply":`${i}`,"replyname":"john","replyliked":false,"likes":9}]
}
this.post[i].comments[j].replys.push(replyadd1)

}

commentheart(i:any,cmntno:any){
  this.post[i].comments[cmntno].commentliked=!this.post[i].comments[cmntno].commentliked;
  this.post[i].comments[cmntno].commentliked?this.post[i].comments[cmntno].likes += 1:this.post[i].comments[cmntno].likes -=1;
}
replylike(i:any,cmntno:any,replyno:any){
  this.post[i].comments[cmntno].replys[replyno].replyliked=!this.post[i].comments[cmntno].replys[replyno].replyliked;
  this.post[i].comments[cmntno].replys[replyno].replyliked?this.post[i].comments[cmntno].replys[replyno].likes += 1:this.post[i].comments[cmntno].replys[replyno].likes -=1;
}


    
 
}
