import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfsborgComponent } from './elfsborg.component';

describe('ElfsborgComponent', () => {
  let component: ElfsborgComponent;
  let fixture: ComponentFixture<ElfsborgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElfsborgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElfsborgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
