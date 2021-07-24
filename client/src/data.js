import faker from "faker";
faker.seed(123);

const videos = [...Array(20)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  thumbnail: faker.image.image(),
  video: faker.random.arrayElement([
    "https://www.youtube.com/watch?v=G9IznvTagO8&ab_channel=OrangeFestivalDambuk",
    "https://www.youtube.com/watch?v=5mbm_l0aXYk&ab_channel=OrangeFestivalDambuk",
    "https://www.youtube.com/watch?v=g0bJkyoGHd8&ab_channel=DiptanshuRoy",
    "https://www.youtube.com/watch?v=x5wM_TOcge0&list=PLxbrX_UtD1nfDjFfxFyTp85NMigF8yRFB&ab_channel=OrangeFestivalDambuk",
  ]),
}));

export default videos;
