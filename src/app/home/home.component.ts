import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Axios, AxiosError } from 'axios';
import { flightModel } from '../../models/flight.models';

@Component({
  selector: 'app-home',
  imports: [JsonPipe, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public flights: flightModel[] | null = null
  public error: string | null = null

  constructor() {
    FlightService.getFlights()
    .then(rsp=>this.flights = rsp.data.content)
    .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  }
}
