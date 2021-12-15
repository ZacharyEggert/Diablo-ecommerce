export type Product = {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
};

export interface PromiseHook<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
    firePromise?: () => void;
}
