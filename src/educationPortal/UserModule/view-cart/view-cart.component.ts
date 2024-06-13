import { Component } from '@angular/core';
import axios from 'axios';

interface ICourse {
  courseId:number
  title:string
  description:string
  price:number
}

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent {
  userId=sessionStorage.getItem("userId");
  courseDetails:ICourse[];

  constructor(){
this.courseDetails=[];

  }
ngOnInit(): void {
 
  axios.get(`http://localhost:9092/cart/get/byUserId/${this.userId}`).then( response=>{
    this.courseDetails = response.data.map((cartItem: any) => cartItem.course);
    console.log(this.courseDetails);

  }).catch(error=>{
alert(error.data);
console.log(error.data);
  });
}


Purchase(){
  axios.get(`http://localhost:9092/user/purchaseCourse/${this.userId}`).then(resposnse=>{
       console.log(resposnse.data)
       alert("Thanks For Purchase ")
       window.location.reload();
  }).catch(error=>{
alert(error.data);
console.log(error);
  });
}

delete(courseId:Number){
  axios.delete(`http://localhost:9092/cart/delete/course/CourseId/${courseId}`).then(response=>{
    alert(response.data);
    window.location.reload();
}).catch(error=>
  {alert(error.data);
  console.log(error);
});

}




}
