import { Component, OnInit } from '@angular/core';
import { AddexpenseComponent } from '../addexpense/addexpense.component';
import { DummyService } from '../dummy.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-showexpense',
  templateUrl: './showexpense.component.html',
  styleUrls: ['./showexpense.component.css']
})
export class ShowexpenseComponent implements OnInit {
  data1:any;

  constructor(private ds:DummyService, private httpClient :HttpClient) { }

  ngOnInit(){
  

  this.ds.display().subscribe(data=>{
    this.data1=data;
    console.log(this.data1);
  })
  //console.log(this.data1);
  }
}
