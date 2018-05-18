import { Component, OnInit } from '@angular/core';
import { Company } from '../company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor() { }

  ngOnInit() {
  }

}
