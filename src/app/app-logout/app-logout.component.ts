import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-logout',
  templateUrl: './app-logout.component.html',
  styleUrls: ['./app-logout.component.scss']
})
export class AppLogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    //this.router.navigate(['/login']);
  }



}
