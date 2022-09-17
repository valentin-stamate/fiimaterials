import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WMoreMateirialsComponent } from './w-more-mateirials.component';

describe('WMoreMateirialsComponent', () => {
  let component: WMoreMateirialsComponent;
  let fixture: ComponentFixture<WMoreMateirialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WMoreMateirialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WMoreMateirialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
