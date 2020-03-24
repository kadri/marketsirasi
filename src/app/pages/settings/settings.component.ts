import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  max = 10;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('max')){
      this.max = parseInt(localStorage.getItem('max'));
    }
  }

  save(){
    localStorage.setItem('max', '' + this.max);
    this._router.navigate(['/']);
  }
}
