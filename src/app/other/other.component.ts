import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

	height:number = 50

  constructor() { }

   ngOnInit() {
  	console.log('document.load: ', window.innerWidth);
  	console.log('height',window.innerHeight);
  	this.height = window.innerHeight;
}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
  		console.log('resize event: ', event.target.innerWidth);
  		this.height = event.target.innerHeight;
	}

}
