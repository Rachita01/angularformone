import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent{

  EmployeeName = new FormControl('');

  updateEmployeeName(){
    this.EmployeeName.setValue('John');
  }

  employeeForm = new FormGroup({
    Name : new FormControl(''),
    Designation : new FormControl(''),
    Address: new FormGroup({
      City: new FormControl(''),
      Country: new FormControl(''),
    })
  });

  onSubmit(){
    console.log(this.employeeForm.value)
  }
}

