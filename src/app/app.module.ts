import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParkingComponent } from './components/parking/parking.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
// import { MdDialogModule } from '@angular/material';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ParkingDetailsDialogComponent } from './components/parking-details-dialog/parking-details-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ParkingService } from './Services/parkingService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParkingComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ParkingDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'parking',
        component: ParkingComponent
      }
    ])
  ],
  entryComponents:[
    LayoutComponent,
    ParkingDetailsDialogComponent
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
