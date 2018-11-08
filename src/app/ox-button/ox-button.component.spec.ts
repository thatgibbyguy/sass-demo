import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxButtonComponent } from './ox-button.component';

describe('OxButtonComponent', () => {
  let component: OxButtonComponent;
  let fixture: ComponentFixture<OxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
