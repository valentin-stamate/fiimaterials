import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolasComponent } from './consolas.component';

describe('ConsolasComponent', () => {
  let component: ConsolasComponent;
  let fixture: ComponentFixture<ConsolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
