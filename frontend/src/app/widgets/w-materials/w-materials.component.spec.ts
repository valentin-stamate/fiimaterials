import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WMaterialsComponent } from './w-materials.component';
import {FormsModule} from "@angular/forms";

describe('WMaterialsComponent', () => {
  let component: WMaterialsComponent;
  let fixture: ComponentFixture<WMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [ WMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
