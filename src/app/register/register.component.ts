import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname=''
password=''
 
registerform=this.fb.group({
  uname:['',[Validators.required,Validators.minLength(4)],Validators.pattern('[a-zA-Z0-9]*')],
  password:['',[Validators.required,Validators.minLength(4)]]
})
  constructor( private fb:FormBuilder,private dataservice:DataserviceService,private router:Router) {}

  ngOnInit(): void {
  }

register(){
this.dataservice.register(this.registerform.value.uname,this.registerform.value.password).subscribe((result:any)=>{
  if(result){
    alert("sucess")
    this.router.navigateByUrl('')
  }
  },
(result)=>{
alert(result.error.message)
})
}
}
