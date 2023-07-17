import * as frisby from 'frisby';
import { Joi } from 'frisby';

describe('Housing API', () => {
  ['http'].forEach((protocol) => {
    const baseURL = `${protocol}://localhost:3000`

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
    describe(`${protocol}:/locations/0`, () => {
      const url = `${baseURL}/locations/0`;

      it('returns a HousingLocation', (done):any => {
        return frisby
          .get(url)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json')
          .expect('jsonTypes', {
            id: Joi.number().required(),
            name: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            photo: Joi.string().required(),
            availableUnits: Joi.number().required(),
            wifi: Joi.boolean().optional(),
            laundry: Joi.boolean().optional(),
          })
          .done(done);
      });

      it('returns "Acme Fresh Start Housing"', (done):any => {
        return frisby
          .get(url)
          .expect('status', 200)
          .expect('header', 'Content-Type', 'application/json')
          .inspectJSON()
          .expect('json', {
            "id": 0,
            "name": "Acme Fresh Start Housing",
            "city": "Chicago",
            // "state": "AZ", // uncomment to see the error
            "state": "IL",
            // "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
            "availableUnits": 4,
            "wifi": true,
            "laundry": true
          })
          .done(done);
      });
    });
  });
});
