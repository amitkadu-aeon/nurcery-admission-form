import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  admissionForm : FormGroup;

  onSubmit(){
    console.warn(this.admissionForm.value);
  }
  

  

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void{
    this.admissionForm = this.formBuilder.group({
      sName : ['', Validators.required],
      fName : ['', Validators.required]
    });
  }

  isValidInput(fieldName):boolean{
    return this.admissionForm.controls[fieldName].invalid && (this.admissionForm.controls[fieldName].dirty || this.admissionForm.controls[fieldName].touched);
  }

}
