import { Component, OnInit } from '@angular/core';
import { Usercreate } from '../share/model/usercreate';
import { UsercreateService } from '../share/usercreate.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usercreate : Array<Usercreate>;
  createMode : boolean;
  newUser : Usercreate;


  constructor(private usercreateService: UsercreateService) { 
    this.usercreateService = usercreateService;
    this.createMode = false;
  }

  createUser() : void{
    this.createMode=true;
    this.newUser = new Usercreate();

  }

  ngOnInit() {
  }

  onCreate() : void{
   this.usercreateService.createuser(this.newUser)
   .subscribe((data : Usercreate)=>{
     this.usercreate.push(data);
     this.createMode =false;
   }, error =>console.log("Error"+ error));
  }

}
