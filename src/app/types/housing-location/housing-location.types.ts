import { Tentative } from 'src/types/none';

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

// TODO? RENAME?
// XXX? Is it really needed?
export interface CustomerData {
  firstName: Tentative<string>;
  lastName: Tentative<string>;
  eMail: Tentative<string>;
}

export class Customer implements CustomerData {
  firstName: Tentative<string>;
  lastName: Tentative<string>;
  eMail: Tentative<string>;

  static createFromForm(data: Partial<Customer>) {
    return new Customer({
      firstName: data.firstName ?? '',
      lastName: data.lastName ?? '',
      eMail: data.eMail ?? '',
    });
  }

  constructor(data: Partial<CustomerData> = {}) {
    Object.assign(this, data);
  }
}
