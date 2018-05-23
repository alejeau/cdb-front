import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() company: Company;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  delete() {
    this.companyService.deleteCompany(this.company.id.toString())
          .subscribe(
            () => this.deleteEvent.emit(this.company.id),
            error => console.error('Error in company deletion', error),
            () => console.log('Company deleted')
          );
  }

}
