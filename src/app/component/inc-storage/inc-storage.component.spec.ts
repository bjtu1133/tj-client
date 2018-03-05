import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncStorageComponent } from './inc-storage.component';

describe('IncStorageComponent', () => {
  let component: IncStorageComponent;
  let fixture: ComponentFixture<IncStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
