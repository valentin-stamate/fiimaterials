import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WMoreMaterialsComponent } from './w-more-materials.component';

describe('WMoreMaterialsComponent', () => {
  let component: WMoreMaterialsComponent;
  let fixture: ComponentFixture<WMoreMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WMoreMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WMoreMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
