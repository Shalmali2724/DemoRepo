import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import axios from 'axios';

interface ICourse {
  courseId:number
  adminId:number
  title:string
  description:string
  price:number
}

@Component({
  selector: 'app-view-course-details',
  templateUrl: './view-course-details.component.html',
  styleUrl: './view-course-details.component.css'
})
export class ViewCourseDetailsComponent {
  courseDetails:ICourse[]=[];
  userForm: FormGroup;
  str:string='';
  constructor(private fb:FormBuilder){
    this.userForm=fb.group({
      courseName: ['', [Validators.required]]
    })
    
  }


onSubmit():void{
 this.str=this.userForm.value.courseName;
  axios.get(`http://localhost:9092/course/get/byName/course/${this.str}`, {
    maxRedirects: 0, // Prevent Axios from following redirects
  }).then(Response=>{

this.courseDetails=Response.data;
console.log(this.courseDetails);
alert("Thank YOu !!");
  }).catch(error=>{

alert(error);
console.log(error);

  });



}



}
