import { Component, OnInit } from '@angular/core';
import {Company} from "../company.model";
import {FormBuilder, FormGroup , Validators} from "@angular/forms";

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {

  company: Company = new Company();
  mainForm: FormGroup;

  initForm() {
    this.mainForm = this.fb.group({
      name: ['', {validators: [Validators.required]}],
      description: '',
      logo: ''
    });
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  submit() : void {
    this.company.name = this.mainForm.get('name').value;
    this.company.description = this.mainForm.get('description').value;
    this.company.logo = this.mainForm.get('logo').value;
    console.log(this.company);
    // Service.update().subscribe(() => console.log('Updated !'));
  }

}
