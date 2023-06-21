import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Optional } from '../../../types/none';
import { HousingService } from '../../services/housing/housing.service';
import {
  Customer,
  HousingLocation,
} from '../../types/housing-location/housing-location.types';

const customerFormGroup = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  eMail: new FormControl(''),
});

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  form = customerFormGroup;
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: Optional<HousingLocation>;

  constructor() {
    const id = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService
      .getById(id)
      .then((location: Optional<HousingLocation>) => {
        this.housingLocation = location;
      });
  }

  submit() {
    const oCustomer: Customer = Customer.createFromForm(this.form.value);
    this.housingService.submit(oCustomer);
  }
}
