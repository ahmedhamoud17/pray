import { Component, OnInit } from '@angular/core';
import { PrayService } from '../../services/pray.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  PrayTimeContainer: any
  constructor(private _PrayService: PrayService) {
    this._PrayService.PrayTime().subscribe({
      next: (res) => {
        this.PrayTimeContainer = res.data
        console.log(this.PrayTimeContainer)
      }
    })
  }

  ngOnInit(): void {
    
  }




}
