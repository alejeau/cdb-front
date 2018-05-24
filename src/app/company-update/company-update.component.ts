import {Component, OnInit} from '@angular/core';
import {Company} from "../company.model";
import {FormBuilder, FormGroup , Validators} from "@angular/forms";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {CompanyService} from "../company.service";
import {noop} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})

export class CompanyUpdateComponent implements OnInit {

  // Ici on récupère la company selon l'id via le service
  company: Company = new Company();
  form: FormGroup;
  isUpdated: boolean = true;
  isSubmitted: boolean = false;

  initForm() {
    this.form = this.fb.group({
      id: '',
      name: ['', {validators: [Validators.required]}],
      description: '',
      pictureUrl: ''
    });
  }

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.initForm();
    this.redirect();
  }

  // trick the Router into believing it's last link wasn't previously loaded
  // if you need to scroll back to top, here is the right place
  redirect() {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {return false;};
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id').valueOf();
    this.companyService.getCompanyById(id).subscribe(
      (value: Company) =>
      { this.company = value;
        console.log('onInit:Next', this.company);
        this.form.patchValue(
          { id: this.company.id,
            name: this.company.name,
            description:  this.company.description,
            pictureUrl: this.company.pictureUrl
          }); },
      (error: any) => console.error('Company not found', error));
  }

  submit() {
    this.isSubmitted = true;
    this.company = <Company> this.form.value;
    this.companyService.updateCompany(this.company).subscribe(
      () => {this.isUpdated = true; console.log('Company updated !', this.company)},
      (error: any) => {this.isUpdated = false; console.error('Error in company update', error)});
    this.router.navigate(['update/' + this.company.id ]).then((value: boolean) => value ? console.log('redirect...') : console.log('stand'));
  }
}
