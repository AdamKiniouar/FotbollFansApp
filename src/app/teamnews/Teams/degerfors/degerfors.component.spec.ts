import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegerforsComponent } from './degerfors.component';

describe('DegerforsComponent', () => {
  let component: DegerforsComponent;
  let fixture: ComponentFixture<DegerforsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegerforsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegerforsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
