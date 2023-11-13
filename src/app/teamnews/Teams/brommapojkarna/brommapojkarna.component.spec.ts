import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrommapojkarnaComponent } from './brommapojkarna.component';

describe('BrommapojkarnaComponent', () => {
  let component: BrommapojkarnaComponent;
  let fixture: ComponentFixture<BrommapojkarnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrommapojkarnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrommapojkarnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
