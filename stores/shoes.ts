export const useShoes = defineStore("shoes", () => {
  const select = ref<string>("CH");
  const shoes = ref<Types.Shoes[]>([
    {
      id: 1,
      title: "SESAME STREET (SSDFW231042U)",
      type: "sneakers",
      price: 5990,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1500/1540/thumbs/30_gdgdg5_2024-03-23_11-39-09.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
    {
      id: 2,
      title: "SESAME STREET (SSDFW231042U)",
      type: "sneakers",
      price: 4990,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1300/1356/thumbs/30_747471_2024-02-27_21-44-37.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
    {
      id: 3,
      title: "SESAME STREET (SSDFW231042U)",
      type: "sneakers",
      price: 6990,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564641_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
    {
      id: 4,
      title: "SESAME STREET (SSDFW231042U)",
      type: "sneakers",
      price: 6990,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1200/1251/thumbs/30_cvfdv_2024-01-05_14-14-46.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
    {
      id: 5,
      title: "SESAME STREET (SSDFW231042U)",
      type: "sneakers",
      price: 6990,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1500/1542/thumbs/30_htyjuty3_2024-03-23_12-00-59.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
    {
      id: 6,
      title: "SESAME STREET (SSDFS211042B)",
      type: "sneakers",
      price: 3590,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1700/1717/thumbs/30_D1GH2235011_2024-05-26_17-20-48.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
    {
      id: 7,
      title: "SESAME STREET (SSDFS211042B)",
      type: "sneakers",
      price: 3590,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1300/1353/thumbs/30_EU-38---CM-245_2024-02-27_20-24-16.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
    {
      id: 8,
      title: "SESAME STREET (SSDFS211042B)",
      type: "sneakers",
      price: 3590,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1000/1013/thumbs/30_sami-zelen6_2023-10-18_21-52-36.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
    {
      id: 9,
      title: "SESAME STREET (SSDFS211042B)",
      type: "sneakers",
      price: 3590,
      isFavorite: false,
      size: ["43cm", "42cm", "41cm", "40cm", "39cm", "38cm", "37cm", "36cm"],
      img: [
        "https://sneakershox.ru/uploads/product/1600/1606/thumbs/30_151351_2024-04-01_22-20-45.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564644_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
        "https://sneakershox.ru/uploads/product/1300/1355/thumbs/70_64564643_2024-02-27_20-34-55.webp",
      ],
    },
  ]);

  const filterByPrice = computed(() => {
    if (select.value === "EX") {
      return shoes.value.sort((firstItem, seconditem) =>
        firstItem.price > seconditem.price ? -1 : 0
      );
    } else if (select.value === "CH") {
      return shoes.value.sort(
        (firstItem, seconditem) => firstItem.price - seconditem.price
      );
    } else if (select.value === "LIKE") {
      return shoes.value.filter((shoes) => shoes.isFavorite === true);
    } else {
      return shoes.value;
    }
  });

  const counterLikes = computed(() => {
    return shoes.value.filter((item) => item.isFavorite === true).length;
  });

  const setSelect = (newValue: string) => {
    select.value = newValue;
  };

  const removeShoes = (id: number) => {
    shoes.value = shoes.value.filter((shoes) => shoes.id !== id);
  };
  return { shoes, select, filterByPrice, counterLikes, setSelect, removeShoes };
});
