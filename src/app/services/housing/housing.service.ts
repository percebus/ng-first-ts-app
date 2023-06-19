import { Injectable } from '@angular/core';
import { Optional } from '../../../types/none';
import { HousingLocation } from '../../types/housing-location/housing-location.types';
import locations from '../../../assets/mock/locations.json';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  data: Array<HousingLocation> = locations;

  getAll(): HousingLocation[] {
    return this.data;
  }

  getById(id: number): Optional<HousingLocation> {
    return this.data.find((housingLocation) => housingLocation.id === id);
  }
}
