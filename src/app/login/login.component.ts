import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname=''
password=''
loginform=this.fb.group({
  uname:['',[Validators.required,Validators.minLength(4),Validators.pattern('[A-Za-z0-9]*')]],
  password:['',[Validators.required,Validators.minLength(4)]]
})
  constructor(private fb:FormBuilder,private dataservice:DataserviceService,private router:Router) { }

  ngOnInit(): void {
  }
login(){
if(this.loginform.valid){
this.dataservice.login(this.loginform.value.uname,this.loginform.value.password).subscribe((data:any)=>{
  if(data){
    alert("login sucess")
    localStorage.setItem("uname",data.uname)
    this.router.navigateByUrl('home')
  }
}),
(data:any)=>{
alert(data.error.message)
}
}
else{
  alert("invalid")
}
}
}
