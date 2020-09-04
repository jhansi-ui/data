import { Component, OnInit } from '@angular/core';
import { EmployedataService } from '../employedata.service';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-employedata',
  templateUrl: './employedata.component.html',
  styleUrls: ['./employedata.component.scss']
})
export class EmployedataComponent implements OnInit {
  searchdatas:string="";
  result:any;
  msg:any;
  records:any;
  editmsg:any;
  constructor(private service:EmployedataService){
    //console.log(this.result)
  }
  ngOnInit(){
     this.service.getdata().subscribe(res=>{
      this.result;
      this.getrecord();
      //console.log(this.getrecord())
    })
  }
   public getrecord(){
     this.service.getdata().subscribe(res=>{
      this.result=res;
    })
  }
   public deleterecord(id){
    this.service.deletedata(id).subscribe(res=>{
      this.msg="deleted successfully";
      this.getrecord();
    })
  }
  public editrecord(id){
    this.service.editdata(id).subscribe(res=>{
      this.editmsg=res[0];
      this.getrecord();
    })
  }
  public putrecord(data){
    this.service.postdata(data).subscribe(res=>{
      this.msg="updated successfully";
      this.getrecord();
    })
  }
  public postrecord(data){
    this.service.postdata(data).subscribe(res=>{
      this.msg="inserted successfully"
      this.getrecord();
    })

  }
}
