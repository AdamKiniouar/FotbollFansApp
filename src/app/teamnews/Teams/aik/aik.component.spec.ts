import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikComponent } from './aik.component';

describe('AikComponent', () => {
  let component: AikComponent;
  let fixture: ComponentFixture<AikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
