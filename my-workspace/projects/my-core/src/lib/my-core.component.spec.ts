import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoreComponent } from './my-core.component';

describe('MyCoreComponent', () => {
  let component: MyCoreComponent;
  let fixture: ComponentFixture<MyCoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCoreComponent]
    });
    fixture = TestBed.createComponent(MyCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
