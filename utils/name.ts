import { faker } from "@faker-js/faker";

export const createRandomName = () => {
  const name = faker.animal.cat();

  return name;
};
