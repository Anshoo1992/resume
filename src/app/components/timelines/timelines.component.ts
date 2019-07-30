import { Component, OnInit ,Input} from '@angular/core';
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  timelineData:any;
  @Input() arrList: any;
 constructor(public api:ApiService) { }

 ngOnInit() {
   //this.getTimelineData();
   console.log(this.arrList);
 }
 // getTimelineData(){
 //   this.api.getTimelineData().then((data)=>{
 //     let res:any=data;
 //     this.timelineData=res.timeline;
 //   })
 // }
 getIconValue(name){
  //let name=item.title;
   return name.substr(0,1);
 }

}
