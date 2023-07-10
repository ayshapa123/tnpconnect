import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Public9Component } from './public9.component';

describe('Public9Component', () => {
  let component: Public9Component;
  let fixture: ComponentFixture<Public9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Public9Component]
    });
    fixture = TestBed.createComponent(Public9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
