import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPageComponent } from './land-page.component';

describe('LandPageComponent', () => {
  let component: LandPageComponent;
  let fixture: ComponentFixture<LandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
