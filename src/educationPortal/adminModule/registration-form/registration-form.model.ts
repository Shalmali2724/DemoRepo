import { FormBuilder, FormGroup } from "@angular/forms";

export class user{

    id: number = 0;
    userName: String = "";
    password: String ="";
    location:String="";
    email:String="";
    formGroup:FormGroup;

    
constructor(){
    let formBuilder = new FormBuilder();
    this.formGroup = formBuilder.group({});
}
}

