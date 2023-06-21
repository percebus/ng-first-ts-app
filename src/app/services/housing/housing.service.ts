import { Injectable } from '@angular/core';
import { Optional } from '../../../types/none';
import {
  Customer,
  HousingLocation,
} from '../../types/housing-location/housing-location.types';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  data: Array<HousingLocation> = [];

  async getAll(): Promise<Array<HousingLocation>> {
    const response = await fetch(this.url);
    const locations: HousingLocation[] = (await response.json()) ?? [];
    return locations;
  }

  async getById(id: number): Promise<Optional<HousingLocation>> {
    const response = await fetch(`${this.url}/${id}`);
    const location: Optional<HousingLocation> = await response.json();
    return location;
  }

  submit(customer: Customer): void {
    console.log('HousingService.submit(customer)', customer);
  }
}
