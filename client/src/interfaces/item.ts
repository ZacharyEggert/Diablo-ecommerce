export default interface Item {
    [key: string]: any;
    _id?: string;
    id?: number;
    make?: string;
    model?: string;
    finish?: string;
    year?: string;
    title?: string;
    created_at?: string;
    shop_name?: string;
    description?: string;
    condition?: {
        uuid?: string;
        display_name?: string;
        description?: string;
    };
    price: {
        amount: string;
        amount_cents: number;
        currency?: string;
        symbol: string;
        display: string;
    };
    inventory?: number;
    offers_enabled?: boolean;
    auction?: boolean;
    categories?: [
        {
            uuid?: string;
            full_name: string;
            _id?: string;
        }
    ];
    published_at?: string;
    buyer_price?: {
        amount?: string;
        amount_cents?: number;
        currency?: string;
        symbol?: string;
        display?: string;
        tax_included_hint?: string;
        tax_included?: boolean;
        tax_included_rate?: number;
    };
    seller_price?: {
        amount?: string;
        amount_cents?: number;
        currency?: string;
        symbol?: string;
        display?: string;
    };
    state?: {
        slug?: string;
        description?: string;
    };
    shipping_profile_id?: string;
    shipping?: {
        local?: boolean;
        rates?: [
            {
                region_code?: string;
                rate?: {
                    amount?: string;
                    amount_cents?: number;
                    currency?: string;
                    symbol?: string;
                    display?: string;
                };
                _id?: string;
            }
        ];
        user_region_rate?: {
            region_code?: string;
            rate?: {
                amount?: string;
                amount_cents?: number;
                currency?: string;
                symbol?: string;
                display?: string;
            };
        };
        initial_offer_rate?: {
            region_code?: string;
            rate?: {
                original?: {
                    amount?: string;
                    amount_cents?: number;
                    currency?: string;
                    symbol?: string;
                    display?: string;
                };
                display?: {
                    amount?: string;
                    amount_cents?: number;
                    currency?: string;
                    symbol?: string;
                    display?: string;
                };
            };
        };
        free_expedited_shipping?: boolean;
    };
    stats?: {
        views?: number;
        watches?: number;
    }
    slug?: string;
    photos?: [
        {
            _links?: {
                large_crop?: {
                    href: string;
                };
                small_crop?: {
                    href: string;
                };
                full?: {
                    href: string;
                };
                thumbnail?: {
                    href: string;
                };
            };
            _id?: string;
        }
    ];
    _links?: {
        photo?: {
            href?: string;
        };
        self?: {
            href?: string;
        };
        update?: {
            href?: string;
            method?: string;
        };
        bump?: {
            href?: string;
            method?: string;
        };
        end?: {
            href?: string;
            method?: string;
        };
        want?: {
            href?: string;
            method?: string;
        };
        unwant?: {
            href?: string;
            method?: string;
        };
        edit?: {
            href?: string;
        };
        web?: {
            href?: string;
        };
        make_offer?: {
            href?: string;
            method?: string;
        };
        add_to_wishlist?: {
            href?: string;
            method?: string;
        };
        remove_from_wishlist?: {
            href?: string;
            method?: string;
        };
        cart?: {
            href?: string;
        };
    };
    __v?: number;
}
