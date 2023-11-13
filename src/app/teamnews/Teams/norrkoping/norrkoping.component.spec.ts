import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorrkopingComponent } from './norrkoping.component';

describe('NorrkopingComponent', () => {
  let component: NorrkopingComponent;
  let fixture: ComponentFixture<NorrkopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorrkopingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorrkopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
