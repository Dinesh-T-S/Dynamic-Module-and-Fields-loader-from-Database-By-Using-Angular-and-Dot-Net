import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicmodulesComponent } from './dynamicmodules.component';

describe('DynamicmodulesComponent', () => {
  let component: DynamicmodulesComponent;
  let fixture: ComponentFixture<DynamicmodulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicmodulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
