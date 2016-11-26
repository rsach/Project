import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  
})
export class NavbarComponent implements OnInit {
	height:number = 50;
	width:number = 50;
  startPage:boolean = true;
  navbar:string ;
  start:string ;

  view:boolean;


  constructor() { }

  ngOnInit() {
  	console.log('document.load: ', window.innerWidth);
  	console.log('height',window.innerHeight);
  	this.width = window.innerWidth-10;
  	this.height = window.innerHeight;
}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
  		console.log('resize event: ', event.target.innerWidth);
  		this.width = event.target.innerWidth-10;
  		this.height = event.target.innerHeight;
	}

  onClick(){
    if(this.startPage){
          this.startPage = !this.startPage;
          this.start = 'animated fadeOut';
          this.navbar = 'animated fadeIn';

    }
    

    console.log(this.view);



    console.log('ssas');

    //return 'animated fadeOut';
  }

  scrollUp(){
      if(! this.startPage){
                    this.startPage = true;
                    this.start = 'animated fadeIn';
                    this.navbar = 'animated fadeOut';


      }

            

            console.log('sfd',this.startPage)



  }


}
