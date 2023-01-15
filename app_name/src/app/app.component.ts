import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


crs=COURSES;

onAppViewed()
{
  console.log("Marija");
}
Select(crs:Course){
  console.log("Marija", this.crs);
}
}
