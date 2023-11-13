import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalmstadComponent } from './halmstad.component';

describe('HalmstadComponent', () => {
  let component: HalmstadComponent;
  let fixture: ComponentFixture<HalmstadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalmstadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalmstadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
