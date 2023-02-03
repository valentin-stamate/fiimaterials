import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArticlesComponent } from './w-articles.component';

describe('WArticlesComponent', () => {
  let component: WArticlesComponent;
  let fixture: ComponentFixture<WArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
