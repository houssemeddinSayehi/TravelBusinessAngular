import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionnaireDesmotsInterditComponent } from './dictionnaire-desmots-interdit.component';

describe('DictionnaireDesmotsInterditComponent', () => {
  let component: DictionnaireDesmotsInterditComponent;
  let fixture: ComponentFixture<DictionnaireDesmotsInterditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionnaireDesmotsInterditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionnaireDesmotsInterditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
