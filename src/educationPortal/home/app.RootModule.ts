import { NgModule } from "@angular/core";
import { HomeComponent } from "./app.homeComponent";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { MatIconModule } from '@angular/material/icon';
import { RegistrationFormComponent } from "../adminModule/registration-form/registration-form.component";
import { ViewAllCoursesComponent } from "../adminModule/view-all-courses/view-all-courses.component";
import { ViewAllUsersComponent } from "../adminModule/view-all-users/view-all-users.component";
import { AdminHomePageComponent } from "../adminModule/admin-home-page/admin-home-page.component";
import { RegisterCourseComponent } from "../adminModule/register-course/register-course.component";
import { UserHomePageComponent } from "../UserModule/user-home-page/user-home-page.component";
import { ViewCourseDetailsComponent } from "../UserModule/view-course-details/view-course-details.component";
import { UserLoginPageComponent } from "../UserModule/user-login-page/user-login-page.component";
import { ViewCartComponent } from "../UserModule/view-cart/view-cart.component";

       
@NgModule({
    imports:[BrowserModule,RouterModule,FontAwesomeModule,FormsModule, AppRoutingModule, MatIconModule,ReactiveFormsModule],
    declarations:[HomeComponent,HeaderComponent,FooterComponent,RegistrationFormComponent,ViewAllCoursesComponent,ViewAllUsersComponent,AdminHomePageComponent,
RegisterCourseComponent,UserHomePageComponent,ViewCourseDetailsComponent,UserLoginPageComponent,ViewCartComponent
    ],
    bootstrap:[HomeComponent]
})
export class RootModule{


}