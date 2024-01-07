import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sortbydate',
  templateUrl: './sortbydate.component.html',
  styleUrls: ['./sortbydate.component.css']
})
export class SortbydateComponent  {
  displaystatus :boolean =false;
//start1: any;
//dateform:any;
data3:any;
constructor(private ds:DummyService, private http:HttpClient){}
data={
  start:'',
  end:''
}
saveForm(dateform:any){

}
 
  ShowExpense(){
    this.displaystatus =true;
    this.ds.display().subscribe(data2=>{
      this.data3=data2;
      console.log(this.data3.length);
      console.log(this.data3);
    })
    //console.log(this.data3.length);
  //  for(let i=1;i<=this.data3.length;i++){
  //   if(i.ExpenseDate >this.data.start){

  //   }
  //  }
  }
  



  

}
