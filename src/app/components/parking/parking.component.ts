import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LayoutComponent } from '../layout/layout.component';
import { ParkingDetailsDialogComponent } from '../parking-details-dialog/parking-details-dialog.component';
import { ParkingService } from '../../Services/parkingService';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  img = '../assets/car.jpg';
  avlpark = '../assets/park.jpg';
  pictures = [
    {
      id: 1,
      title: 'Amit',
      img: '../assets/car.jpg',
      cnumber: 'KA-5342',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 2,
      title: 'Manoj',
      img: '../assets/car.jpg',
      cnumber: 'KA-5336',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 3,
      title: 'Prem',
      img: '../assets/car.jpg',
      cnumber: 'KA-7522',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 4,
      title: 'Antaleena',
      img: '../assets/car.jpg',
      cnumber: 'KA-5342',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 5,
      title: 'Parul',
      img: '../assets/car.jpg',
      cnumber: 'KA-5382',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 6,
      title: 'Archana',
      img: '../assets/car.jpg',
      cnumber: 'KA-9042',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 7,
      title: 'Himanshu',
      img: '../assets/car.jpg',
      cnumber: 'KA01 MS 0970',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 8,
      title: 'Prakash',
      img: '../assets/car.jpg',
      cnumber: 'KA01 MS 0950',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 9,
      title: 'Noushad',
      img: '../assets/car.jpg',
      cnumber: 'KA01 MS 7570',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 10,
      title: 'Mrinal',
      img: '../assets/car.jpg',
      cnumber: 'KA01 MS 0953',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 11,
      title: 'Rahul',
      img: '../assets/car.jpg',
      cnumber: 'KA01 MS 4627',
      avlpark: '../assets/park.jpg'
    },
    {
      id: 12,
      title: 'Jalaja',
      img: '../assets/car.jpg',
      cnumber: 'KA01 MS 6342',
      avlpark: '../assets/park.jpg'
    },
  ];
  dialogResult = '';
  public parkingdata = [];
  constructor(public dialog: MatDialog, private parkingService: ParkingService ) { }

  ngOnInit() {
    this.parkingService.getParkingData()
    .subscribe(data => this.parkingdata = data);
  }

  openDialog(param) {
    const dialoRef = this.dialog.open(ParkingDetailsDialogComponent, {
      width: '600px',
      data: 'you are allocating to slot number: ' + param,
      disableClose: true
    });

    dialoRef.afterClosed().subscribe(result => {
      console.log('dialo closed: ${result}');
      this.dialogResult = result;
    });
  }

}
