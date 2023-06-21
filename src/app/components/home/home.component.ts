import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing/housing.service';
import { HousingLocation } from '../../types/housing-location/housing-location.types';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  allData: Array<HousingLocation> = [];
  data: Array<HousingLocation> = [];

  filterResults(text: string) {
    if (!text) {
      this.data = this.allData;
      return;
    }

    const _text = text.toLowerCase();
    this.data = this.allData.filter((oHousingLocation: HousingLocation) => {
      const city = oHousingLocation?.city.toLowerCase();
      return city.includes(_text);
    });
  }

  constructor() {
    this.allData = this.housingService.getAll();
    this.data = this.allData;
  }
}
