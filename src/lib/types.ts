import { ListingsQuery } from "src/generated/graphql";


export interface PromiseHook<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
    firePromise?: (page?: number) => void;
}

export interface PaginatedPromiseHook<T> extends PromiseHook<T> {
    pageCount?: number;
    getPageCount?: () => void;
}

export type Products = ListingsQuery['listings']['data'];
export type Product = {
    __typename?: 'Listing';
    categories: Array<string>;
    condition: string;
    description: string;
    finish?: string | null | undefined;
    id: number;
    make: string;
    model: string;
    photos: Array<string>;
    price: number;
    reverbId?: number | null | undefined;
    reverbImagesImported?: boolean | null | undefined;
    reverbSelfLink?: string | null | undefined;
    reverbSku?: string | null | undefined;
    salePrice?: number | null | undefined;
    slug: string;
    submodel?: string | null | undefined;
    title: string;
    year?: string | null | undefined;
}