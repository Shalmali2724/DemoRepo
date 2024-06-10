import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      adminName: ['', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z ]+$/)]],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(8)]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      axios.post("http://localhost:9092/admin/register", this.userForm.value).then((response) => {
        alert(response.data);
        this.router.navigate(['/login']);
      }).catch((error) => {
        alert(error.response.data);
      });
    }
  }

  
}