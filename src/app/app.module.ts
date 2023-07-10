import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AnnouncementComponent } from './landingpage/announcement/announcement.component';
import { PostComponent } from './landingpage/post/post.component';
import { FeedComponent } from './landingpage/feed/feed.component';
import { Public3Module } from './public3/public3.module';
import { CreatedialogComponent } from './createdialog/createdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    AnnouncementComponent,
    PostComponent,
    FeedComponent,
    CreatedialogComponent,
    DialogComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Public3Module,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
