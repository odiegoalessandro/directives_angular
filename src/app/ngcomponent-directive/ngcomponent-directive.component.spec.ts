import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcomponentDirectiveComponent } from './ngcomponent-directive.component';

describe('NgcomponentDirectiveComponent', () => {
  let component: NgcomponentDirectiveComponent;
  let fixture: ComponentFixture<NgcomponentDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcomponentDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcomponentDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
