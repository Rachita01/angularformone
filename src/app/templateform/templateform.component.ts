import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  skills = ['Java', 'C++', 'Python', 'SQL'];
  model = new Emp(101,'John','Project Manager', this.skills[0]);
  submitted=false;
  onSubmit()
  {
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
