import { Component, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies()
          .subscribe(
            companiesReceived => this.companies = companiesReceived,
            error => console.error('Oups', error),
            () => console.log('Finished')
          );
  }

}
