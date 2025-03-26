export type Consumable = {
    name: string;
    brand: string;
    price: string;
    type: 'ingredient' | 'part';
    quantity: number;
}