import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
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
  userId=sessionStorage.getItem("userId");
  userForm: FormGroup;
  str:string='';
  constructor(private fb:FormBuilder,private router:Router){
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
  }).catch(error=>{
alert(error);
console.log(error);
  });
}
  add(courseId:number){

    axios.post(`http://localhost:9092/cart/add/${this.userId}/${courseId}`).then(response=>{
      alert(response.data); 
    

    }).catch(error => {
      alert(error.response.data);
      this.router.navigate(['view/cart']);
    });
    

  }
  


}




