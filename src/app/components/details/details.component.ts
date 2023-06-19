import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing/housing.service';
import { HousingLocation } from '../../types/housing-location/housing-location.types';
import { Optional } from '../../../types/none';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Optional<HousingLocation>;

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getById(id);
  }
}
