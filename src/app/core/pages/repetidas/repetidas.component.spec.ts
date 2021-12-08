import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetidasComponent } from './repetidas.component';

describe('RepetidasComponent', () => {
  let component: RepetidasComponent;
  let fixture: ComponentFixture<RepetidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepetidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
