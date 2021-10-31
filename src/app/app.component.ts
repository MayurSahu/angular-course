import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userObject = {
    name: 'mayur',
    age: '30',
    id: '0',
    isColored: true
  }
  title = "Test";
  showAppComponent: boolean = true;
  postsObject: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts')
  .subscribe(results => this.postsObject = results);

  constructor(private httpService: HttpService,private router:Router) {
this.router.events.subscribe((e)=>{
console.log(this.router.url);
});
   }
  handleEvent(event: any) {
    console.log(event);
  }

  ngOnInit(){
    console.log("response"+this.postsObject);
  }

}

