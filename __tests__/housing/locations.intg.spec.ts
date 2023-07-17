import * as frisby from 'frisby';
import { Joi } from 'frisby';
import { headers } from './common';

describe('Housing API', () => {
  ['http'].forEach((protocol) => {
    const baseURL = `${protocol}://localhost:3000`;

    describe(`${protocol}:/locations/`, () => {
      const url = `${baseURL}/locations`;

      it('returns Array<HousingLocation>', (): any => {
        // [
        //   {
        //     "id": 0,
        //     "name": "Acme Fresh Start Housing",
        //     "city": "Chicago",
        //     "state": "IL",
        //     "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
        //     "availableUnits": 4,
        //     "wifi": true,
        //     "laundry": true
        //   },
        //   ...
        return frisby
          .get(url)
          .expect('status', 200)
          .expect('header', 'Content-Type', headers['Content-Type'])
          .expect('jsonTypes', '*', {
            id: Joi.number().required(),
            name: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            photo: Joi.string().required(),
            // inexistant: Joi.string().required(), // uncomment to see the error
            availableUnits: Joi.number().required(),
            wifi: Joi.boolean().optional(),
            laundry: Joi.boolean().optional(),
          });
      });
    });
  });
});
