import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HockyComponent } from './hocky.component';

describe('HockyComponent', () => {
  let component: HockyComponent;
  let fixture: ComponentFixture<HockyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HockyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HockyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
