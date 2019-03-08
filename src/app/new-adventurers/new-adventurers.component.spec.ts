import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdventurersComponent } from './new-adventurers.component';

describe('NewAdventurersComponent', () => {
  let component: NewAdventurersComponent;
  let fixture: ComponentFixture<NewAdventurersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdventurersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdventurersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
