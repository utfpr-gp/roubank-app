import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotauthorizedComponent } from './notauthorized.component';

describe('NotauthorizedComponent', () => {
  let component: NotauthorizedComponent;
  let fixture: ComponentFixture<NotauthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotauthorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
