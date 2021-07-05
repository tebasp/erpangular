import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardComponent } from './videocard.component';

describe('VideocardComponent', () => {
  let component: VideocardComponent;
  let fixture: ComponentFixture<VideocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
