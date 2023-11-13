import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalmoComponent } from './malmo.component';

describe('MalmoComponent', () => {
  let component: MalmoComponent;
  let fixture: ComponentFixture<MalmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalmoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
