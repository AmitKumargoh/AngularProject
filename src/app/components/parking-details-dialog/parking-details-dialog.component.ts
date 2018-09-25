import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-parking-details-dialog',
  templateUrl: './parking-details-dialog.component.html',
  styleUrls: ['./parking-details-dialog.component.css']
})
export class ParkingDetailsDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<ParkingDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: String) { }

  ngOnInit() {
  }
  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');

  }
  onCloseCancel(){
    this.thisDialogRef.close('cancel');
  }

}
