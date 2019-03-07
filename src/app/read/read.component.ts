import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Quest } from './../models/quest.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit 
{

  availableQuests: Observable<Quest[]>;

  constructor(private store: Store<AppState>) 
  { 
    this.availableQuests = store.select('availableQuests');
  }

  ngOnInit() {}
}