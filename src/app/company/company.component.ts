import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() company: Company;
  @Output() deleteEvent = new EventEmitter<number>();
  show = false;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    interval(10).subscribe(() => this.show = true);
  }

  delete() {
    this.companyService.deleteCompany(this.company.id.toString())
          .subscribe(
            () => interval(100).subscribe(() => this.deleteSuccess()),
            error => console.error('Error in company deletion', error),
            () => console.log('Company deleted')
          );
  }

  deleteSuccess() {
    this.show = false;
    interval(300).subscribe(() => this.deleteEvent.emit(this.company.id));
  }

}
