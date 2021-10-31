import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
goToRoute(route: string='/info'):void{
  this.router.navigateByUrl(route).then(()=>{
console.log(this.router.url);

  })
}

  ngOnInit(): void {
  }

}
