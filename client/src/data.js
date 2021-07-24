import faker from "faker";

export const data = [...Array(20)].map((item) => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    thumbnail: faker.image.image(),
  };
});
