export default interface Item {
    _id?: string;
    id: number;
    title: string;
    description?: string;
    price: number;
    image?: string;
    category?: string;
    quantity?: number;
    createdAt?: Date;
    updatedAt?: Date;
    product_image_1?: string;
    stock?: number;
}