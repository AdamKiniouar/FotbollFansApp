import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoteborgComponent } from './goteborg.component';

describe('GoteborgComponent', () => {
  let component: GoteborgComponent;
  let fixture: ComponentFixture<GoteborgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoteborgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoteborgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
