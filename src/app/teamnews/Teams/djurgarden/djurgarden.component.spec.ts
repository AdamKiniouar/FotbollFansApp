import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjurgardenComponent } from './djurgarden.component';

describe('DjurgardenComponent', () => {
  let component: DjurgardenComponent;
  let fixture: ComponentFixture<DjurgardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjurgardenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjurgardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
