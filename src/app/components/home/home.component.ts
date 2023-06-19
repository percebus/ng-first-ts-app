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
  data: Array<HousingLocation> = [];

  constructor() {
    this.data = this.housingService.getAll();
  }
}
