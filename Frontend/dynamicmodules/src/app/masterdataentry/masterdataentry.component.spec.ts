import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataentryComponent } from './masterdataentry.component';

describe('MasterdataentryComponent', () => {
  let component: MasterdataentryComponent;
  let fixture: ComponentFixture<MasterdataentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterdataentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdataentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
