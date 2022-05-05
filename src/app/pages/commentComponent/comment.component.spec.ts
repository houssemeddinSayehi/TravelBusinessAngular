import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { commentComponent } from './comment.component';

describe('DashboardComponent', () => {
  let component: commentComponent;
  let fixture: ComponentFixture<commentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ commentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(commentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
