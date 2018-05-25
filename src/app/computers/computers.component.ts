import { Component, OnInit, Input } from '@angular/core';
import { Computer } from '../computer.model';
import { ComputerService } from '../computer.service';
declare var initModal: any;

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  initModal: any;
  computers: Computer[];
  computersToPrint: Computer[];
  @Input() searchTerm;
  searching = false;

  constructor(private computerService: ComputerService) { }

  ngOnInit() {
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
    this.computersToPrint = this.computers.filter((computer) => computer.name.toLowerCase().startsWith(searchTerm.toLocaleLowerCase()));
    this.searching = this.computers.length === this.computersToPrint.length;
  }

  delete(id: number) {
    this.computers.splice(this.computers.findIndex(c => c.id === id), 1);
    this.computersToPrint = this.computers;
  }

}
