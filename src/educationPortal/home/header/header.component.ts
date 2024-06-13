import { Component } from '@angular/core';
import { RootModule } from '../app.RootModule';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
isLoggedIn:boolean=true;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}

}


// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {

//   isLoggedIn: boolean = false;

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     if (sessionStorage.getItem("emailId") !== null) {
//       this.isLoggedIn = true;
//     }
//   }

//   logout(): void {
//     sessionStorage.clear();
//     alert("Logout !!!!! Visit again");
//     this.router.navigate(['/']);
//   }

// }
