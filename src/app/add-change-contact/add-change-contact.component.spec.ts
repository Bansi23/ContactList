import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangeContactComponent } from './add-change-contact.component';

describe('AddChangeContactComponent', () => {
  let component: AddChangeContactComponent;
  let fixture: ComponentFixture<AddChangeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChangeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
