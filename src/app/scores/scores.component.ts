import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  showForm: boolean = false;
  showPrev: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm(): void {
    this.showPrev = false;
    this.showForm = !this.showForm;
  }

  togglePrev(): void {
    this.showForm = false;
    this.showPrev = !this.showPrev;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData = form.value;
      console.log('Form Data:', formData);
      // Handle the form data (e.g., save to a database)
      
      //this.showForm = false; // Hide the form after submission
      form.reset(); // Reset the form after submission
    }
  }
}
