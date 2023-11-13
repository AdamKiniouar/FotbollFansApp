import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamnewsComponent } from './teamnews.component';

describe('TeamnewsComponent', () => {
  let component: TeamnewsComponent;
  let fixture: ComponentFixture<TeamnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
