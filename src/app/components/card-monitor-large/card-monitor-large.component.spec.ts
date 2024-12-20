import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMonitorLargeComponent } from './card-monitor-large.component';

describe('CardMonitorLargeComponent', () => {
  let component: CardMonitorLargeComponent;
  let fixture: ComponentFixture<CardMonitorLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMonitorLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMonitorLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
