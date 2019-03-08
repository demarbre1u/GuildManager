import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestsComponent } from './new-quests.component';

describe('NewQuestsComponent', () => {
  let component: NewQuestsComponent;
  let fixture: ComponentFixture<NewQuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
