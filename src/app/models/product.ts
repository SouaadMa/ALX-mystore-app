export class Product {
    id: number;
    name: string;
    price: number;
    amount: number;
    description: string;
    category: string;
    imageUrl: string;
  
    constructor() {
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.amount = 0;
        this.description = '';
        this.category = '';
        this.imageUrl = '';
    }
}