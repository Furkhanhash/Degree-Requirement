import { Component } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent {
  newCourse: Course = new Course(0,'', '','');
  courses: Course[] = [];


   coreCourses = [
    { "course code": "CS", "number": "530" },
    { "course code": "CS", "number": "531" },
    { "course code": "CS", "number": "550" },
    { "course code": "CS", "number": "580" },
    { "course code": "CS", "number": "584" },
    { "course code": "CS", "number": "540" },
    { "course code": "SWE", "number": "619" },
    { "course code": "SWE", "number": "621" },
    { "course code": "CS", "number": "555" },
    { "course code": "CS", "number": "571" },
    { "course code": "ISA", "number": "562" },
    { "course code": "CS", "number": "583" },
    { "course code": "CS", "number": "551" }
  ];

  advanceCourses = [
    { "course code": "CS", "number": "650", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "657", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "667", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "678", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "681", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "685", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "687", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "688", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "689", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "690", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "747", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "782", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "787", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "INFS", "number": "740", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "INFS", "number": "760", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "INFS", "number": "772", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "INFS", "number": "774", "area": "Artificial Intelligence and Databases - Advance" },
    { "course code": "CS", "number": "640", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "CS", "number": "691", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "631", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "632", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "637", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "642", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "645", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "681", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "ISA", "number": "681", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "699", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "721", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "737", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "760", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "795", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "SWE", "number": "796", "area": "Programming Languages and Software Engineering - Advance" },
    { "course code": "CS", "number": "635", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "655", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "658", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "672", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "673", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "675", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "692", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "706", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "719", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "756", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "773", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "779", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "788", "area": "Systems and Networks - Advance" },
    { "course code": "ISA", "number": "656", "area": "Systems and Networks - Advance" },
    { "course code": "ISA", "number": "673", "area": "Systems and Networks - Advance" },
    { "course code": "ISA", "number": "674", "area": "Systems and Networks - Advance" },
    { "course code": "ISA", "number": "697", "area": "Systems and Networks - Advance" },
    { "course code": "ISA", "number": "763", "area": "Systems and Networks - Advance" },
    { "course code": "ISA", "number": "764", "area": "Systems and Networks - Advance" },
    { "course code": "ISA", "number": "785", "area": "Systems and Networks - Advance" },
    { "course code": "SWE", "number": "660", "area": "Systems and Networks - Advance" },
    { "course code": "CS", "number": "600", "area": "Theoretical Computer Science - Advance" },
    { "course code": "CS", "number": "630", "area": "Theoretical Computer Science - Advance" },
    { "course code": "CS", "number": "633", "area": "Theoretical Computer Science - Advance" },
    { "course code": "CS", "number": "683", "area": "Theoretical Computer Science - Advance" },
    { "course code": "CS", "number": "684", "area": "Theoretical Computer Science - Advance" },
    { "course code": "CS", "number": "693", "area": "Theoretical Computer Science - Advance" },
    { "course code": "CS", "number": "662", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "663", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "664", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "667", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "682", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "686", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "694", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "752", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "774", "area": "Visual Computing - Advance" },
    { "course code": "CS", "number": "777", "area": "Visual Computing - Advance" }
  ];
  
  

  requiredCoreCourses = 5;
  coreCoursesSatisfied = 0;
  coreCoursesLeft = 0;
  csAdvancedCourses:Course[]=[];
  advancedCourseflag = 0;
  // advancedCourseCount = 0;
  //  areas = new Set();

constructor(private courseService: CourseService){}

ngOnInit(): void {
  this.courses = this.courseService.getCourses();
  this.calculateCoreCoursesSatisfied();
    this.calculateCoreCoursesLeft();
}

addCourse(): void {

  const isDuplicate = this.courses.some(course => 
    course.name === this.newCourse.name && course.code === this.newCourse.code
  );

  if (isDuplicate) {
    // Handle the case where a duplicate course is found
    alert('This course already exists.');
  } else {


  const newId = this.courses.length + 1;
  this.newCourse.id = newId;


  const matchingCourse = this.advanceCourses.find(course => 
    course["course code"] === this.newCourse.name && course["number"] === this.newCourse.code
);

if (matchingCourse) {
    this.newCourse.area = matchingCourse.area;
} else {
    // Handle the case where no matching course is found
    this.newCourse.area = "Unknown";
}


  console.log("Added");
  console.log(this.newCourse);
  this.courseService.addCourse(this.newCourse);
  this.newCourse = new Course(0,'', '',''); // Reset the form
  this.calculateCoreCoursesSatisfied();
    this.calculateCoreCoursesLeft();
}
}



CheckRequirement():void{
  console.log('Data ',this.courses);
}



calculateCoreCoursesSatisfied(): void {
  this.coreCoursesSatisfied = this.coreCourses.reduce((count, coreCourse) => {
    const foundCourse = this.courses.find(course => {
      return (
        course["name"] === coreCourse["course code"] &&
        course["code"] === coreCourse["number"]
      );
    });
    return foundCourse ? count + 1 : count;
  }, 0);


   this.csAdvancedCourses = this.courses.filter(course => {
    return courseIsAdvanced(course, this.advanceCourses) && course["name"] === "CS";
  });

  
  const areas = new Set();
  let advancedCourseCount = 0;
  

  this.courses.forEach(course => {
    if (courseIsAdvanced(course, this.advanceCourses)) {
      areas.add(course["area"]);
      advancedCourseCount++;
    }
  });
  if (advancedCourseCount >= 4 && areas.size >= 2 && this.csAdvancedCourses.length >= 2) {
    console.log("Condition met: At least 4 advanced courses from 2 different areas.");
    this.advancedCourseflag = 1;
  } else {
    console.log("Condition not met: Not enough advanced courses or areas.");
  }

  // Calculate core courses left
  this.coreCoursesLeft = Math.max(this.requiredCoreCourses - this.coreCoursesSatisfied, 0);



  function courseIsAdvanced(course: Course, advanceCourses: any[]): boolean {
    return advanceCourses.some(advCourse => {
      return (
        advCourse["course code"] === course["name"] &&
        advCourse["number"] === course["code"]
      );
    });
  }

}

deleteCourse(index: number): void {
  this.courseService.deleteCourse(index);
  this.calculateCoreCoursesSatisfied(); // Recalculate core courses
}


calculateCoreCoursesLeft(): void {
  this.coreCoursesLeft = Math.max(this.requiredCoreCourses - this.coreCoursesSatisfied, 0);
}

}
