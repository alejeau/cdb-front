import {Component, OnInit} from '@angular/core';
import {Company} from "../company.model";
import {FormBuilder, FormGroup , Validators} from "@angular/forms";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})

export class CompanyUpdateComponent implements OnInit {

  // Ici on récupère la company selon l'id via le service
  company: Company = new Company();
  mainForm: FormGroup;

  initForm() {
    this.mainForm = this.fb.group({
      name: ['', {validators: [Validators.required]}],
      description: '',
      logo: ''
    });
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
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

  submit() : void {
    this.company.name = this.mainForm.get('name').value;
    this.company.description = this.mainForm.get('description').value;
    this.company.logo = this.mainForm.get('logo').value;
    console.log(this.company);
    // Service.update().subscribe(() => console.log('Updated !'));
    this.router.navigate(['update']).then((value: boolean) => value ? console.log('true') : console.log('false'));
  }

}
