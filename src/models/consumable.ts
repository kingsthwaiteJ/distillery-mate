export type Consumable = {
  id: number;
  name: string;
  brand: string;
  price: string;
  type: "ingredient" | "part";
  quantity: number;
};
