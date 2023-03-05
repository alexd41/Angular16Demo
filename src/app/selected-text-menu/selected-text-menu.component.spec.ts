import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTextMenuComponent } from './selected-text-menu.component';

describe('SelectedTextMenuComponent', () => {
  let component: SelectedTextMenuComponent;
  let fixture: ComponentFixture<SelectedTextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedTextMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedTextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
