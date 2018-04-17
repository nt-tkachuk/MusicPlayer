import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCompComponent } from './t-comp.component';

describe('TCompComponent', () => {
  let component: TCompComponent;
  let fixture: ComponentFixture<TCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
