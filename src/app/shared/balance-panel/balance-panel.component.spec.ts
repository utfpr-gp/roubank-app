import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancePanelComponent } from './balance-panel.component';

describe('BalancePanelComponent', () => {
  let component: BalancePanelComponent;
  let fixture: ComponentFixture<BalancePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
