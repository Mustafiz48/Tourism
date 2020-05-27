import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../user';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.component.html',
  styleUrls: ['./addplace.component.css']
})
export class AddplaceComponent implements OnInit {

  constructor() { }

@Output() public data=new EventEmitter<User>();

  ngOnInit(): void {

  }


  Adduser(usr)
  {
    usr.pic=this.picture;
    this.data.emit(usr);
  }


public picture;

picselect(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.picture = event.target.result;
    }
  }
}


public flag:boolean=true;
hell(num)
{
  if (num>=0 && num<=10)
    this.flag=true;
  else
  this.flag= false;
}

}