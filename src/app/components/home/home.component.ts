import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import locations from '../../../assets/mock/locations.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data: Array<HousingLocation> = locations;
}
