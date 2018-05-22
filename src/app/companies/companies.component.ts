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

  fillCompany(value: Company): Company {
    value.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus ante mi. Donec nisl ante, \
                          vestibulum vitae mattis cursus, dignissim.';
    value.logo = 'http://www.fourchette-et-bikini.fr/sites/default/files/styles/full_670x350/public/nestor_1.png?itok=jS_iIGw5';
    return value;
  }


  search(searchTerm: string) {
    console.log('recherche du terme :' + searchTerm);
    // this.recipes.splice(this.recipes.findIndex(r => r.id === id), 1);
  }

}
