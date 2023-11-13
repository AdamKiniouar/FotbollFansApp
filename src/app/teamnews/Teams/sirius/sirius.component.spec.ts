import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiriusComponent } from './sirius.component';

describe('SiriusComponent', () => {
  let component: SiriusComponent;
  let fixture: ComponentFixture<SiriusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiriusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiriusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
