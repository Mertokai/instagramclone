import { faker } from "@faker-js/faker";

const generateFakeUser = () => {
  return {
    _id: faker.datatype.uuid(),
  };
};
