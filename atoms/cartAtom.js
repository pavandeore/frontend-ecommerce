import { atom } from "jotai";

const databaseAtom = atom([
  {
    id: 1,
    name: "samsung mobile",
    quantity: 0,
    price: 12000,
    category: "digital",
  },
  { id: 2, name: "hp laptop", quantity: 0, price: 62000, category: "digital" },
  { id: 3, name: "apples", quantity: 0, price: 120, category: "food " },
  {
    id: 4,
    name: "sony headphone",
    quantity: 0,
    price: 2000,
    category: "digital",
  },
  { id: 5, name: "chocolates", quantity: 0, price: 50, category: "food" },
]);

const cartAtom = atom([]);

const totalAmountAtom = atom(0);

export { cartAtom, databaseAtom, totalAmountAtom };
