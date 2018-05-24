import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../company.service';
import {Company} from '../../company.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  errorMessage: string;
  addForm: FormGroup;

  constructor(private companyService: CompanyService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  cancel() {
    this.router.navigate(['/company']).catch().then();
  }

  addCompany(): void {
    if (this.addForm.status.toLowerCase() === 'valid') {
      console.log('addCompany');
      const company = new Company();
      company.name = this.addForm.controls.name.value;
      company.pictureUrl = this.addForm.controls.url.value;
      company.description = this.addForm.controls.description.value;

      console.log('company: ', company);

      this.companyService.addCompany(company).subscribe(
        () => this.router.navigate(['/company']).catch().then(),
        () => this.errorMessage = 'There were errors while adding the company. Please try again.'
      );
    }
  }

  createForm() {
    const urlPattern = '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$';
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      url: ['', Validators.pattern(urlPattern)],
      description: ['', Validators.maxLength(255)]
    });
  }

}
