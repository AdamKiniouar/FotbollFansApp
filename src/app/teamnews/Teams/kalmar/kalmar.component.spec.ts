import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalmarComponent } from './kalmar.component';

describe('KalmarComponent', () => {
  let component: KalmarComponent;
  let fixture: ComponentFixture<KalmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
