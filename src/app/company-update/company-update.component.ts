import {Component, OnInit} from '@angular/core';
import {Company} from "../company.model";
import {FormBuilder, FormGroup , Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})

export class CompanyUpdateComponent implements OnInit {

  company: Company;
  mainForm: FormGroup;

  initForm() {
    this.mainForm = this.fb.group({
      name: ['', {validators: [Validators.required]}],
      description: '',
      logo: ''
    });
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.company = new Company();
  }

  submit() : void {
    this.company.name = this.mainForm.get('name').value;
    this.company.description = this.mainForm.get('description').value;
    this.company.logo = this.mainForm.get('logo').value;
    this.router.navigate(['update']).then((value: boolean) => value ? console.log('true') : console.log('false'));
    console.log(this.company);
    // Service.update().subscribe(() => console.log('Updated !'));
  }

}
