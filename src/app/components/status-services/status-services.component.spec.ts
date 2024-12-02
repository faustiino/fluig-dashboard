import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusServicesComponent } from './status-services.component';

describe('StatusServicesComponent', () => {
  let component: StatusServicesComponent;
  let fixture: ComponentFixture<StatusServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
