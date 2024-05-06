import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnapoornaComponent } from './annapoorna.component';

describe('AnnapoornaComponent', () => {
  let component: AnnapoornaComponent;
  let fixture: ComponentFixture<AnnapoornaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnapoornaComponent]
    });
    fixture = TestBed.createComponent(AnnapoornaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
