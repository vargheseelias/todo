import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // tododata:any=[]
  // data:any= localStorage.getItem("toodo")
  // data1:any=JSON.parse(this.data)

  constructor(private dataservice: DataserviceService) {this.get_data() }

  ngOnInit(): void {
  }

  // store(name: any) {
  //  this.tododata.push(name)
  // //  localStorage.setItem("toodo",JSON.stringify(this.tododata))
  // //  console.log(JSON.parse(this.data));

  // }

  // delete(val:any){
  // this.tododata.splice(val,1)

  // }

  // deleteall(){
  // this.tododata=[]
  // // localStorage.setItem("toodo",JSON.stringify(this.tododata))

  // }
uname = localStorage.getItem('uname')
tododata=[]
ldate:Date=new Date

  add_data(uname: any, data: any) {

    this.dataservice.add_data(uname, data).subscribe((result: any) => {
      if (result) {
        
        console.log(result.tododata);
        this.get_data()
      }
    }), (result: any) => {
      alert(result.error.message)
    }
  }

get_data(){
 
  this.dataservice.get_data(this.uname).subscribe((result:any)=>{
    if(result){
      console.log(result.tododata);
      this.tododata=result.tododata
      
    }
  }),(result:any)=>{
    alert(result.error.message)
  }
}

delete_data(uname:any,message:any){
  
  this.dataservice.delete_data(uname,message).subscribe((result:any)=>{
    if(result){
      
      this.get_data()
    }
  }),
  (result:any)=>{
    alert("invalid")
  }

}

delete_all(){
  this.dataservice.delete_all(this.uname).subscribe((result:any)=>{
    if(result){
      
      this.get_data()
    }
  }),
  (result:any)=>{
    alert("invalid")
  }

}



}
