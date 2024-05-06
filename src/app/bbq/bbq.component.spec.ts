import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbqComponent } from './bbq.component';

describe('BbqComponent', () => {
  let component: BbqComponent;
  let fixture: ComponentFixture<BbqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbqComponent]
    });
    fixture = TestBed.createComponent(BbqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
