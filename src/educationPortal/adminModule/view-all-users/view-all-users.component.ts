import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';


interface User {

  id: number;
  userName: string;
  password: string;
  email: string;
  location:string;
}

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrl: './view-all-users.component.css'
})
export class ViewAllUsersComponent {

  userDetails:User[]=[];
pageNumber:number=0;
pageSize:number=5;

constructor(private router:Router){}
  ngOnInit(): void {
 
    axios.get(`http://localhost:9092/admin/get/allUsers?${this.pageNumber}&${this.pageSize}`).then(response=>{
      this.userDetails=response.data;  
    }) .catch(error => {
      alert(error.response.data);
    });
  }
delete(id:number)
{
    axios.delete(`http://localhost:9092/admin/delete/${id}`).then(response=>{
    alert(response.data); 
    this.router.navigate(['/view/users']); 
    window.location.reload();
  }).catch(error => {
    alert(error.response.data);
  });
  
}

}
