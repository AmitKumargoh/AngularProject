import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<LayoutComponent>, @Inject(MAT_DIALOG_DATA) public data: String) { }

  ngOnInit() {
  }
  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');

  }
  onCloseCancel(){
    this.thisDialogRef.close('cancel');
  }

}
