import { Component, OnInit, Input } from '@angular/core';
import { Computer } from '../computer.model';
import { ComputerService } from '../computer.service';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { CompaniesComponent } from '../companies/companies.component';
declare var initModal: any;

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  initModal: any;
  computers: Computer[];
  companies: Company[];
  computersToPrint: Computer[];
  @Input() searchTerm;
  @Input() companyName;

  constructor(private computerService: ComputerService, private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies()
          .subscribe(
            companiesReceived => this.companies = companiesReceived,
            error => console.error('Error while getting companies list from API', error),
            () => console.log('Companies list successfully received')
          );


    this.computerService.getComputersTotal()
          .subscribe(
                    total => this.computerService.getComputersLimit(total)
                                .subscribe(
                                  computersReceived => this.setArrays(computersReceived),
                                  error => console.error('Error while getting computers list from API', error),
                                  () => console.log('Computers list successfully received')
                    ),
            error => console.error('Error while getting computers total from API', error),
            () => console.log('Computers total successfully received')
          );

    this.computersToPrint = this.computers;
  }

  setArrays(computers: Computer[]): void {
    this.computers = computers;
    this.computersToPrint = computers;
    initModal();
  }

  search(searchTerm: string) {
    this.computersToPrint = this.computers.filter((computer) => computer.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  }

  filterByCompany(companyName: string) {
    console.log(companyName);
    if (companyName !== '') {
      this.computersToPrint = this.computers.filter((computer) => computer.companyName === companyName);
    } else {
      this.computersToPrint = this.computers;
    }
  }

  delete(id: number) {
    this.computers.splice(this.computers.findIndex(c => c.id === id), 1);
    this.computersToPrint = this.computers;
  }

}
