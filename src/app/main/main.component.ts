import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quest } from '../models/quest.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  availableQuests: Observable<Quest[]>;

  constructor(private store: Store<AppState>, private router: Router) 
  { 
    this.availableQuests = store.select('availableQuests');
  }

  ngOnInit() {
  }

  nextDay()
  {
    this.router.navigate(['new-quests'])
  }
}
