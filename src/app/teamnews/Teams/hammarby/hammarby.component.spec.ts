import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HammarbyComponent } from './hammarby.component';

describe('HammarbyComponent', () => {
  let component: HammarbyComponent;
  let fixture: ComponentFixture<HammarbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HammarbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HammarbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
