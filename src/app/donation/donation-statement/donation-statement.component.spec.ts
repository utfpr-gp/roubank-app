import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationStatementComponent } from './donation-statement.component';

describe('DonationStatementComponent', () => {
  let component: DonationStatementComponent;
  let fixture: ComponentFixture<DonationStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
