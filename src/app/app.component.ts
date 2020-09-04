import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {zipcodeValidator, passValidator} from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form  = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(4)]],
      lastname:['',[Validators.required,Validators.minLength(4)]],
      middlename: ['', Validators.minLength(2)],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: '',
      cnfpass: ['', passValidator],
      phonenumber:['',[Validators.required,Validators.pattern("")]],
      zip: ['', zipcodeValidator]
    });


    this.form.controls.password.valueChanges
    .subscribe(
      x => this.form.controls.cnfpass.updateValueAndValidity()
    )
  }


  onSubmit(){
    // console.log(this.form.controls.zip);
  this.form.markAsTouched();
    
    alert("submitted sucessfully");
  }
  onClear(){
    
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }

}
}
