export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
  
    constructor() {
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.description = '';
        this.category = '';
        this.imageUrl = '';
    }
}