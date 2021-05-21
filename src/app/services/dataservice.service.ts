import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

register(uname:any,password:any){
  const  data={
      uname,
      password
    }
   return this.http.post('http://localhost:3000/register',data)
  }

login(uname:any,password:any){
  const  data={
    uname,
    password
  }
 return this.http.post('http://localhost:3000/login',data)
}

add_data(uname:any,data1:any){
const data={
  uname,
  data1
}
return this.http.patch('http://localhost:3000/adddata',data)

}
get_data(uname:any){
 
  
  return this.http.get("http://localhost:3000/getdata/"+uname)

}
 delete_data(uname:any,message:any){
   const data={
     uname,
     message
   }
   return this.http.patch('http://localhost:3000/delete',data)
 }
 
 delete_all(uname:any){
  const data={
    uname,
    
  }
  return this.http.patch('http://localhost:3000/reset',data)
}

}
