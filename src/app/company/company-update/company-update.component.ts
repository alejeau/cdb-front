import {Component, OnInit} from '@angular/core';
import {Company} from '../../company.model';
import {FormBuilder, FormGroup , Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../company.service';
import {noop} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})

export class CompanyUpdateComponent implements OnInit {

  company: Company = new Company();
  companiesCount: number = 0;
  updateForm: FormGroup;
  errorMessage: string;

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    const urlPattern = '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$';
    this.updateForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      pictureUrl: ['', Validators.pattern(urlPattern)],
      description: ['', Validators.maxLength(255)]
    });
  }

  resetForm(): void {
    this.updateForm.setValue(
      { id: '',
        name: '',
        description:  '',
        pictureUrl: ''
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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id').valueOf();
    // Ajouter un service count pour company
    this.companyService.getCompanies().subscribe(
      value => this.companiesCount = value.length,
      (error:any) => { console.error('Error while getting companies list from API', error); this.resetForm();},
      () => console.log('Companies list successfully received')
    );

    this.companyService.getCompanyById(id).subscribe(
      (value: Company) => this.setup(value),
      (error: any) => console.error('Company not found', error),
      () => console.log('Company successfully received')
    );
  }

  setup(value: Company) {
    this.company = value;
    this.fillForm();
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
