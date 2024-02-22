import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrayService } from '../../services/pray.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent implements OnInit {

  constructor(private _Router: Router , ) { }


  ngOnInit(): void {

    setTimeout(() => {
      this._Router.navigate(['/home']);
    }, 4000);

  }

}
