import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  searchTerm = '';

  constructor() { }

  ngOnInit() {
  }

  search(searchTerm) {
    console.log(searchTerm);
    this.searchEvent.emit(searchTerm);
  }

}
