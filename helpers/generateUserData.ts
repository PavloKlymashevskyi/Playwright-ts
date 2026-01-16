import { faker } from '@faker-js/faker';
import { randomCountry } from './randomCountry';

let phoneNumber = faker.phone.number({ style: 'international' }).substring(1);
let dobFormatted = faker.date.birthdate({ mode: 'age', min: 18, max: 65 }).toISOString().split('T')[0];


export function generateUserData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dob: dobFormatted,
    streetAddress: faker.location.streetAddress(),
    zipCode: faker.location.zipCode(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: randomCountry(),
    phoneNumber: phoneNumber,
  };
};