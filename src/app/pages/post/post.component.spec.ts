import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { postComponent } from './post.component';

describe('DashboardComponent', () => {
  let component: postComponent;
  let fixture: ComponentFixture<postComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ postComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(postComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
