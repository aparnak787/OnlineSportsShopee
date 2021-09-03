import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VollyballComponent } from './vollyball.component';

describe('VollyballComponent', () => {
  let component: VollyballComponent;
  let fixture: ComponentFixture<VollyballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VollyballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VollyballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
