import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDonationStatementComponent } from './link-donation-statement.component';

describe('LinkDonationStatementComponent', () => {
  let component: LinkDonationStatementComponent;
  let fixture: ComponentFixture<LinkDonationStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkDonationStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDonationStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
