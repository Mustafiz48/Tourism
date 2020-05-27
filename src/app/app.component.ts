import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tourism';

  public PlaceList=[];
  constructor(){}
  public newuser=new User("RUET","Rajshahi",8,"blablabla");



  ngOnInit (){}

  public a;
  private id=0;
  recieved($hell)
  {

    // console.log($hell);
    // console.log('name '+$hell.name);
    // console.log(this.PlaceList);
    $hell.id=this.id;
    this.id++;
    this.a=JSON.stringify($hell);
    this.PlaceList.push(JSON.parse(this.a));
  }

  public index
  Update($data)
  {
    if($data.name=="")
    {
      this.addflag=true;
      this.updateflag=false;
    }
    else
    {
      console.log("else executed")
    this.index=this.PlaceList.findIndex((obj => obj.id == $data.id));
    this.PlaceList[this.index]=$data;
    this.addflag=true;
    this.updateflag=false;
    }

  }
  public addflag:boolean=true;
  public updateflag:boolean=false;

  public searchname;
  public searchindex;
  public searchfound;
  public fnd:boolean;
  search()
  {
    let found=false;
    this.searchfound;

    // console.log('searching'+this.searchname);
    this.searchindex = this.PlaceList.findIndex( ({ name }) => name === this.searchname);
      // console.log(this.searchindex);
    if(this.searchindex!=-1)
    {
      found=true;
      this.searchfound=this.PlaceList[this.searchindex];
    }
    this.fnd=found;

  }

  srtasc()
  {
    this.PlaceList.sort((a, b) => (a.rating < b.rating ? -1 : 1));

  }
  srtdsc()
  {
    this.PlaceList.sort((a, b) => (a.rating > b.rating ? -1 : 1));

  }
  public dltindx;
  Delete(idd)
  {
    this.dltindx=this.PlaceList.findIndex((obj => obj.id == idd));
    this.PlaceList.splice(this.dltindx,1);

  }
  // public updateid;
  // updateit(id)
  // {
  //   this.updateid=id;
  // }
  public updateuser;
  Updateit(id)
  {
    this.addflag=false;
    this.updateflag=true;


    this.index=this.PlaceList.findIndex((obj => obj.id ==id));
    this.updateuser=this.PlaceList[this.index];
    console.log(this.updateuser.name);

  }
  



}

