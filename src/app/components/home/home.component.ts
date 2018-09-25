import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dialogResult = '';
  constructor(public dialog: MatDialog) { 
    // dialogRef.disableClose = true;
  }

  ngOnInit() {
  }
  openDialog(){
    const dialoRef = this.dialog.open(LayoutComponent, {
      width: '600px',
      data: 'this is dialog text',
      disableClose: true
    });

    dialoRef.afterClosed().subscribe(result => {
      console.log('dialo closed: ${result}');
      this.dialogResult = result;
    });
  }

}
