import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WClassesComponent } from './w-classes.component';

describe('WClassesComponent', () => {
  let component: WClassesComponent;
  let fixture: ComponentFixture<WClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
