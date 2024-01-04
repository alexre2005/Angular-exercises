import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {COURSES} from "../../db-data";
import {Course} from "../model/course";

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  course:Course;

  @Output()
  courseSelected = new EventEmitter<Course>() ;

  constructor() {
  }

  ngOnInit() {

  }
  onCourseViewed() {
    console.log("card component - button clicked ...")
    this.courseSelected.emit(this.course) ;
  }

}
