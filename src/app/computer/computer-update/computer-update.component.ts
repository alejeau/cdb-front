import { Component, OnInit } from '@angular/core';
import { Computer } from '../../computer.model';
import { FormBuilder, FormGroup , Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ComputerService } from '../../computer.service';
import { noop } from 'rxjs/internal-compatibility';
import { CompanyService } from '../../company.service';
import { Company } from '../../company.model';

@Component({
  selector: 'app-computer-update',
  templateUrl: './computer-update.component.html',
  styleUrls: ['./computer-update.component.scss']
})

export class ComputerUpdateComponent implements OnInit {

  computer: Computer = new Computer();
  companies: Company[];
  updateForm: FormGroup;
  errorMessage: string;

  constructor(private computerService: ComputerService, private companyService: CompanyService,
              private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id').valueOf();
    this.computerService.getComputerById(id)
          .subscribe(
            (value: Computer) => this.setup(value),
            (error: any) => console.error('Computer not found', error)
          );

    this.companyService.getCompanies()
          .subscribe(
            companiesReceived => this.companies = companiesReceived,
            error => console.error('Error while getting companies list from API', error),
            () => console.log('Companies list successfully received')
          );
  }

  setup(value: Computer) {
    this.computer = value;
    this.fillForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      introduced: '',
      discontinued: '',
      companyId: ''
    });
  }

  fillForm() {
    this.updateForm.patchValue(
      { id: this.computer.id,
        name: this.computer.name,
        introduced:  this.computer.introduced,
        discontinued: this.computer.discontinued,
        companyId: this.computer.companyId
      });
  }

  cancel() {
    this.router.navigate(['/computer']).catch().then();
  }

  updateComputer() {
    if (this.updateForm.status.toLowerCase() === 'valid') {
      this.computer = <Computer> this.updateForm.value;
      this.computerService.updateComputer(this.computer).subscribe(
        () => this.router.navigate(['/computer']).catch().then(),
        () => this.errorMessage = 'There were errors while updating the computer. Please try again.'
      );
    }
  }
}
