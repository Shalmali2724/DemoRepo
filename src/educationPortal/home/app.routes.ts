import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app.homeComponent';
import { RegistrationFormComponent } from '../adminModule/registration-form/registration-form.component';
import { NgModule } from '@angular/core';
import { AdminHomePageComponent } from '../adminModule/admin-home-page/admin-home-page.component';
import { RegisterCourseComponent } from '../adminModule/register-course/register-course.component';
import { ViewAllUsersComponent } from '../adminModule/view-all-users/view-all-users.component';
import { ViewAllCoursesComponent } from '../adminModule/view-all-courses/view-all-courses.component';
import { UserHomePageComponent } from '../UserModule/user-home-page/user-home-page.component';
import { ViewCourseDetailsComponent } from '../UserModule/view-course-details/view-course-details.component';

export const routes: Routes = [

    // { path: "", component: HomeComponent },   
    { path: "user/register", component: RegistrationFormComponent } ,  
    {path: "admin/home",   component:AdminHomePageComponent},
    {path: "register/course",   component:RegisterCourseComponent},
    {path: "view/users",   component:ViewAllUsersComponent},
    {path: "view/courses",   component:ViewAllCoursesComponent},
    {path:"user/home",component:UserHomePageComponent},
    {path:"user/view/course/details",component:ViewCourseDetailsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
