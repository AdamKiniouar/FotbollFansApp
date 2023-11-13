import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarbergComponent } from './varberg.component';

describe('VarbergComponent', () => {
  let component: VarbergComponent;
  let fixture: ComponentFixture<VarbergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarbergComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
