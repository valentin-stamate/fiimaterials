import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WContributorsComponent } from './w-contributors.component';

describe('WContributorsComponent', () => {
  let component: WContributorsComponent;
  let fixture: ComponentFixture<WContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WContributorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
