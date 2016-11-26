import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';
import { OtherComponent } from './other/other.component';
import { BottomComponent } from './bottom/bottom.component';
import { InViewDirective } from './in-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    OtherComponent,
    BottomComponent,
    InViewDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
