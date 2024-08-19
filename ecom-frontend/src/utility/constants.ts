export type Product = {
    id: number,
    price: number,
    brand: string,
    name: string,
    desc: string,
    category: string,
    releaseDate: Date,
    availability: boolean,
    quantity: number
};

export const backendUrl = 'http://localhost:8080';
