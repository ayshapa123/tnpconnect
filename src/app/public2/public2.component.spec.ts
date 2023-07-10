import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Public2Component } from './public2.component';

describe('Public2Component', () => {
  let component: Public2Component;
  let fixture: ComponentFixture<Public2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Public2Component]
    });
    fixture = TestBed.createComponent(Public2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
