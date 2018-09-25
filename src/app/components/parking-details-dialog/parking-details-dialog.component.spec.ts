import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingDetailsDialogComponent } from './parking-details-dialog.component';

describe('ParkingDetailsDialogComponent', () => {
  let component: ParkingDetailsDialogComponent;
  let fixture: ComponentFixture<ParkingDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
