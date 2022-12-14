import type { nutritionData } from "@/utils/interfaces-types";

//? used YAZIO -> https://www.yazio.com/de
export const DATA: nutritionData[] = [
  {
    id: 1,
    name: "Chicken",
    values: { kcal: 190, fat: 7.4, carbs: 0, protein: 28.9 },
    info: "No skin",
    image: "Chicken.png",
  },
  {
    id: 2,
    name: "Ground beef",
    values: { kcal: 273, fat: 18.2, carbs: 0, protein: 25.4 },
    info: "",
    image: "Test",
  },
  {
    id: 3,
    name: "Tofu",
    values: { kcal: 127, fat: 5.6, carbs: 2.8, protein: 15.5 },
    info: "",
    image: "",
  },
  {
    id: 4,
    name: "Cheese",
    values: { kcal: 127, fat: 5.6, carbs: 2.8, protein: 15.5 },
    info: "From a goat",
    image: "Cheese.png",
  },
  {
    id: 5,
    name: "Fusilli",
    values: { kcal: 162, fat: 0.6, carbs: 32.6, protein: 5.2 },
    info: "Type of pasta",
    image: "Test",
  },
  {
    id: 6,
    name: "Rice",
    values: { kcal: 169, fat: 1.5, carbs: 32.0, protein: 3.0 },
    info: "Long grain",
    image: "Test",
  },
];

export const findSpecificItem = (id: number) => {
  const item = DATA.find((item) => item.id === id);
  return item;
};

export const SORTED_DATA = () => {
  const data = [...DATA].sort((a, b) => {
    const a_letter = a.name.toLowerCase();
    const b_letter = b.name.toLowerCase();

    if (a_letter < b_letter) return -1;
    if (a_letter > b_letter) return 1;
    return 0;
  });
  return data;
};
