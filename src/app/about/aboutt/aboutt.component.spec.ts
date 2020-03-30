import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttComponent } from './aboutt.component';

describe('AbouttComponent', () => {
  let component: AbouttComponent;
  let fixture: ComponentFixture<AbouttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
