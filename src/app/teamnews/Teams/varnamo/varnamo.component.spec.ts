import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarnamoComponent } from './varnamo.component';

describe('VarnamoComponent', () => {
  let component: VarnamoComponent;
  let fixture: ComponentFixture<VarnamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarnamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarnamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
