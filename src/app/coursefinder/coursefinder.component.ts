import { Component } from '@angular/core';

@Component({
  selector: 'app-coursefinder',
  templateUrl: './coursefinder.component.html',
  styleUrls: ['./coursefinder.component.css']
})
export class CoursefinderComponent {
  searchTerm: string = '';
  courses: any[] = [  // Assuming you have a list of courses
    { name: 'Golf Course 1', location: 'City A' },
    { name: 'Golf Course 2', location: 'City B' },
    { name: 'Golf Course 3', location: 'City C' },
    // Add more courses as needed
  ];
  filteredCourses: any[] = [];  // To store filtered courses

  search() {
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
