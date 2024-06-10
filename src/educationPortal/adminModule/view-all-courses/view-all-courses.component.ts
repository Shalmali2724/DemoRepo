import { NumberInput } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

interface Course {
  courseId:number
  adminId:number
  title:string
  description:string
  price:number
}

@Component({
  selector: 'app-view-all-courses',
  templateUrl: './view-all-courses.component.html',
  styleUrl: './view-all-courses.component.css'
})

export class ViewAllCoursesComponent {


courseDetails:Course[]=[];
adminId:number=1;

constructor(private router:Router){}
  ngOnInit(): void {
    
    axios.get<Course[]>(`http://localhost:9092/admin/get/allCourse/byadminId/${this.adminId}`, {
      maxRedirects: 0, // Prevent Axios from following redirects
    })
    .then(response => {
      this.courseDetails = response.data;
      console.log(this.courseDetails); // Check if data is received in the console
    })
    .catch(error => {
      console.error(error);
      alert(error.response.data);
    });
    
  }

  
delete(id:number)
{
    axios.delete(`http://localhost:9092/admin/delete/course/${id}`).then(response=>{
    alert(response.data); 
    this.router.navigate(['/view/course']); 
    window.location.reload();
  }).catch(error => {
    alert(error.response.data);
  });
  
}
}
