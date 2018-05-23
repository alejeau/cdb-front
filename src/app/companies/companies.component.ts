import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
declare var initModal: any;

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  initModal: any;
  companies: Company[];
  companiesToPrint: Company[];
  @Input() searchTerm;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies()
          .subscribe(
            companiesReceived => this.setArrays(companiesReceived),
            error => console.error('Error while getting companies list from API', error),
            () => console.log('Companies list successfully received')
          );

    this.companiesToPrint = this.companies;
  }

  setArrays(companies: Company[]): void {
    this.companies = companies;
    this.companiesToPrint = companies;
    initModal();
  }

  search(searchTerm: string) {
    this.companiesToPrint = this.companies.filter((company) => company.name.toLowerCase().startsWith(searchTerm.toLocaleLowerCase()));
  }

  delete(id: number) {
    this.companies.splice(this.companies.findIndex(c => c.id === id), 1);
    this.companiesToPrint = this.companies;
  }

}
