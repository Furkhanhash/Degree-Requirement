import { Injectable } from '@angular/core';
import { Course } from './models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [];
  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  deleteCourse(courseId: number): void {
    const index = this.courses.findIndex(course => course.id === courseId);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

}
