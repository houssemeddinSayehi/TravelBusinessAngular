import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { userLayoutComponent } from './user-layout.component';


describe('userLayoutComponent', () => {
  let component: userLayoutComponent;
  let fixture: ComponentFixture<userLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ userLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(userLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
