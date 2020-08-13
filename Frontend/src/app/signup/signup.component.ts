import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  email: string
  password: string
  first_name: string
  last_name: string
  phone: string
  device_type: string
  player_id: string

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){    
    this.router.navigate(['showcase']);
  }
}
