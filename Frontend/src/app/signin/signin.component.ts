import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string
  password: string
  role: string
  device_type: string
  player_id: string
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){    
    this.router.navigate(['showcase']);
  }
}
