import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrebroComponent } from './orebro.component';

describe('OrebroComponent', () => {
  let component: OrebroComponent;
  let fixture: ComponentFixture<OrebroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrebroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrebroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
