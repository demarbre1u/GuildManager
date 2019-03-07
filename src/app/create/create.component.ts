import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as QuestActions from './../actions/quest.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit 
{

  constructor(private store: Store<AppState>) {}

  addAvailableQuest(name, description, rank) 
  {
    this.store.dispatch(new QuestActions.AddAvailableQuest({name: name, description: description, rank: rank}))
  }

  ngOnInit() {}

}