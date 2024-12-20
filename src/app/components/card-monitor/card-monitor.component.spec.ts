import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMonitorComponent } from './card-monitor.component';

describe('CardMonitorComponent', () => {
  let component: CardMonitorComponent;
  let fixture: ComponentFixture<CardMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
