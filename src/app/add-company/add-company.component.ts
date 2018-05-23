import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../company.model';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  success: boolean;
  successMessage: string;
  addForm: FormGroup;

  constructor(private companyService: CompanyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.success = false;
  }

  addCompany(): void {
    console.log('addCompany');
    const company = new Company();
    company.name = this.addForm.controls.name.value;
    company.pictureUrl = this.addForm.controls.url.value;

    console.log('company: ', company);

    this.companyService.addCompany(company).subscribe(
      () => {
        this.successMessage = 'The company has been added!';
        this.rebuildForm();
      },
      errors => this.successMessage = 'There were errors while adding the company: ' + errors
    );
  }

  createForm() {
    const urlPattern = '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$';
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(254)]],
      url: ['', Validators.pattern(urlPattern)]
    });
  }

  rebuildForm() {
    this.addForm.reset({
      name: '',
      url: ''
    });
  }

}
