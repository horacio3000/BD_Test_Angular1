import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAlternativeComponent } from './test-alternative.component';

describe('TestAlternativeComponent', () => {
  let component: TestAlternativeComponent;
  let fixture: ComponentFixture<TestAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAlternativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
