import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WAboutComponent } from './w-about.component';

describe('WAboutComponent', () => {
  let component: WAboutComponent;
  let fixture: ComponentFixture<WAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
