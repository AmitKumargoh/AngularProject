import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParkingModel } from '../model/parking-model';
import { Observable } from 'rxjs/index';


@Injectable()
export class ParkingService {

    private url: string = 'http://localhost:8090/park';
    constructor(private http: HttpClient) { }

    getParkingData(): Observable<ParkingModel[]> {
        return this.http.get<ParkingModel[]>(this.url);
    }
}