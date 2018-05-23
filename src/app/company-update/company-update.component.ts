import {Component, OnInit} from '@angular/core';
import {Company} from "../company.model";
import {FormBuilder, FormGroup , Validators} from "@angular/forms";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})

export class CompanyUpdateComponent implements OnInit {

  // Ici on récupère la company selon l'id via le service
  company: Company;
  form: FormGroup;

  initForm() {
    this.form = this.fb.group({
      name: '',//['', {validators: [Validators.required]}],
      description: '',
      logo: ''
    });
  }

  constructor(private companyService: CompanyService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    let id = this.route.snapshot.paramMap.get('id').valueOf();
    this.companyService.getCompanyById(id).subscribe(
      (value: Company) => {this.company = value;console.log('Next', this.company);},
      (error: any) => console.error('Company not found', error));
    this.redirect();
  }

  redirect() {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {return false;};
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }
  ngOnInit() {
    this.initForm();
  }

  submit() {
    if (this.form.valid) {
      console.log('form submitted');
    }
    console.log(this.form);
    let v1 = this.form.get('name').value;
    let v2 = this.form.get('description').value;
    let v3 = this.form.get('logo').value;
    if(v1 !== ''){
      this.company.name = v1;
      // this.company.description = v2;
      // this.company.logo = v3;
      this.company.name = this.company.name.trim();
      this.company.description = this.company.description.trim();
      this.company.logo = this.company.logo.trim();
      console.log('Updated', this.company);
    }

    // Service.update().subscribe(() => console.log('Updated !'));
    this.router.navigate(['update/' + this.company.id ]).then((value: boolean) => value ? console.log('true') : console.log('false'));
  }

}
