import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../company.service';
import {Company} from '../../company.model';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  success: boolean;
  errorMessage: string;
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
        this.startTimeOut(this.successMessage);
        this.rebuildForm();
      },
      errors => {
        this.errorMessage = 'There were errors while adding the company: ' + errors;
        this.startTimeOut(this.errorMessage);
      }
    );
  }

  createForm() {
    const urlPattern = '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$';
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      url: ['', Validators.pattern(urlPattern)]
    });
  }

  rebuildForm() {
    this.addForm.reset({
      name: '',
      url: ''
    });
  }

  startTimeOut(item: any): void {
    setTimeout(() => { item = null; }, 5000);
  }

}
