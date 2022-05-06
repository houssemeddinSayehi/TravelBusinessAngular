import { ComponentFixture, TestBed } from '@angular/core/testing';

import { postbytagnameComponent } from './postbytagname.component';

describe('postbytagComponent', () => {
  let component: postbytagnameComponent;
  let fixture: ComponentFixture<postbytagnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ postbytagnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(postbytagnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
