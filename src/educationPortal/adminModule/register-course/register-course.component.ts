import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrl: './register-course.component.css'
})
export class RegisterCourseComponent {

  courseForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this. courseForm = this.fb.group({
      adminId: ['', [Validators.required,Validators.pattern(/^[0-9]$/)]],
      title: ['', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z ]+$/)]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this. courseForm.valid) {
      axios.post("http://localhost:9092/admin/course/add", this. courseForm.value).then((response) => {
        alert(response.data);
       
      }).catch((error) => {
        alert(error.response.data);
      });
    }
  }



}
