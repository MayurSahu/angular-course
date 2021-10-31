import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface UserInterface {
  name: string;
  age: string;
  id: string;
  isColored:boolean;
}
interface postsInterface{
  id:string;
  title:string;
  userId:string;
  body:string;

}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserInterface;
  @Input() posts: postsInterface[];


  @Output() userEvent: EventEmitter<UserInterface>;
isColored:boolean =false;
currentStyle:Record<string,string> = {};

  constructor() {
    this.user = {} as UserInterface;
    this.userEvent = new EventEmitter<UserInterface>();
    this.posts=[] as  postsInterface[];
  
  }

  ngOnInit(): void {
    this.isColored=this.user.isColored;
    this.currentStyle={
      'font-style':this.isColored?'italic':'normal',
      'font-weight':this.isColored?'bold':'normal',
      'font-size':this.isColored?'24px':'12pc'
    }
    console.log("User:" + this.user.name);
    console.log("Posts:" + this.posts);

  }

  sendUserEvent(): void {
    this.userEvent.emit(this.user);
  }
}
