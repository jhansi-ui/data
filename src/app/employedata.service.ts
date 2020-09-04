import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployedataService {

  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get("http://localhost:3000/empdetailsapi")
  }
  deletedata(id:number){
    if(confirm("are you sure want to delete record?")){
    return this.http.delete("http://localhost:3000/empdetailsapi/"+id)
  }
}
  editdata(id){
    return this.http.get("http://localhost:3000/empdetailsapi?id="+id)
  }
  postdata(data){
    if(data.id){
      return this.http.put("http://localhost:3000/empdetailsapi/"+data.id,data)
    }else{
      return this.http.post("http://localhost:3000/empdetailsapi",data)
    }
    
  }
}
