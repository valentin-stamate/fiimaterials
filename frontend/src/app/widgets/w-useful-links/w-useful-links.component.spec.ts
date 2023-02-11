import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WUsefulLinksComponent } from './w-useful-links.component';

describe('WArticlesComponent', () => {
  let component: WUsefulLinksComponent;
  let fixture: ComponentFixture<WUsefulLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WUsefulLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WUsefulLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
