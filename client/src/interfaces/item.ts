export default interface Item {
    [key: string]: string | undefined | number | Date;
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
    product_image_2?: string;
    product_image_3?: string;
    product_image_4?: string;
    product_image_5?: string;
    product_image_6?: string;
    product_image_7?: string;
    product_image_8?: string;
    product_image_9?: string;
    product_image_10?: string;
    product_image_11?: string;
    product_image_12?: string;
    product_image_13?: string;
    product_image_14?: string;
    product_image_15?: string;
    product_image_16?: string;
    product_image_17?: string;
    product_image_18?: string;
    product_image_19?: string;
    product_image_20?: string;
    product_image_21?: string;
    product_image_22?: string;
    product_image_23?: string;
    product_image_24?: string;
    product_image_25?: string;
    stock?: number;
}