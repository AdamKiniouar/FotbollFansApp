import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackenComponent } from './hacken.component';

describe('HackenComponent', () => {
  let component: HackenComponent;
  let fixture: ComponentFixture<HackenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
