export type Recipe = {
    name: string;
    ingredients: { name: string; quantity: number; unit: string; }[];
    steps: { content: string; }[];
    output: {
        name: string;
        quantity: number;
        unit: string;
    }
}