import { ComponentFixture, TestBed } from '@angular/core/testing';

import { postbytagComponent } from './postbytag.component';

describe('postbytagComponent', () => {
  let component: postbytagComponent;
  let fixture: ComponentFixture<postbytagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ postbytagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(postbytagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
