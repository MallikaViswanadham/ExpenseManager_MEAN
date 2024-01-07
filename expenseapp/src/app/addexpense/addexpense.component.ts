import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent {
 houserent: number | undefined;
  electricity: number|undefined;
  travel :number | undefined;
  food:number | undefined;
  other:number | undefined;
  date:string =''
  constructor(private http:HttpClient){

  }
formdata1:any;
register(){
 let data1={
  "houserent":this.houserent,
  "electricity":this.electricity,
  "travel" :this.travel,
  "food":this.food,
  "other":this.other,
  "date":this.date

};
this.http.post("http://localhost:9002/expenses/addexpense",data1).subscribe((resultdata : any)=>
{
  console.log(resultdata);
  alert("Expenses added successfully");

});
}


saveForm(formdata:any){
  this.register();
}
}




  







