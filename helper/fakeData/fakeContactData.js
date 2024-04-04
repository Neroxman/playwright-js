import { faker } from '@faker-js/faker';

export const fakeContactData = {
    get email() {
      return faker.internet.email();
    },
    get username() {
      return faker.internet.userName();
    },
    get description() {
      return faker.lorem.sentence();
    }
};  