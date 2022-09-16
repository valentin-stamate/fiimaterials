import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMaterialsComponent } from './more-materials.component';

describe('MoreMaterialsComponent', () => {
  let component: MoreMaterialsComponent;
  let fixture: ComponentFixture<MoreMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
