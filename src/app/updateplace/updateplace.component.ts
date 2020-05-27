import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
// import { EventEmitter } from 'protractor';
import { User } from '../user';
import { from } from 'rxjs';

@Component({
  selector: 'app-updateplace',
  templateUrl: './updateplace.component.html',
  styleUrls: ['./updateplace.component.css']
})
export class UpdateplaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Output() public update=new EventEmitter<User>();
@Input() updateusr
// @Output() flags


public usr=new User("","GOndor",1,"blaa");
// public index;
// public updateusr;

doit()
{

  console.log(this.updateusr)
  console.log(this.updateusr.name);

}


public picture;
UpdateUser(user)
{

  user.id=this.updateusr.id;
  user.pic=this.picture;
  this.update.emit(user);

}

picselect(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.picture = event.target.result;
    }
  }
}
public flags:boolean;
cancelAdd()
{
  this.update.emit(this.usr);
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
