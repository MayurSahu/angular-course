import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
testprop=new FormControl('');
profileForm=new FormGroup({
firstName:new FormControl(''),
lastName:new FormControl('')

});
profileTwo=this.fb.group({
  firstName:['',Validators.min(2)],
  lastName:[''],
  address:this.fb.group({
    street:[''],
    city:[''],
    state:[''],
    zip:['']
  })
});

  constructor(private fb:FormBuilder) {

   }

  modifyControl():void{
this.testprop.setValue('');

  }
  ngOnInit(): void {
  }

}
