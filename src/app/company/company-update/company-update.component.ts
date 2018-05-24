import {Component, OnInit} from '@angular/core';
import {Company} from '../../company.model';
import {FormBuilder, FormGroup , Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CompanyService} from '../../company.service';
import {noop} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})

export class CompanyUpdateComponent implements OnInit {

  company: Company = new Company();
  updateForm: FormGroup;
  errorMessage: string;

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id').valueOf();
    this.companyService.getCompanyById(id)
          .subscribe(
            (value: Company) => this.setup(value),
            (error: any) => console.error('Company not found', error)
          );
  }

  setup(value: Company) {
    this.company = value;
    this.fillForm();
  }

  createForm() {
    const urlPattern = '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$';
    this.updateForm = this.fb.group({
      id: '',
      name: [[Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      url: [Validators.pattern(urlPattern)],
      description: [Validators.maxLength(255)]
    });
  }

  fillForm() {
    this.updateForm.patchValue(
      { id: this.company.id,
        name: this.company.name,
        description:  this.company.description,
        pictureUrl: this.company.pictureUrl
      });
  }

  cancel() {
    this.router.navigate(['/company']).catch().then();
  }

  updateCompany() {
    if (this.updateForm.status.toLowerCase() === 'valid') {
      this.company = <Company> this.updateForm.value;
      this.companyService.updateCompany(this.company).subscribe(
        () => this.router.navigate(['/company']).catch().then(),
        () => this.errorMessage = 'There were errors while updating the company. Please try again.'
      );
    }
  }
}
