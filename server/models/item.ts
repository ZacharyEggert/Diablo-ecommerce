/* eslint-disable camelcase */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    id: {
        type: 'Number',
    },
    make: {
        type: 'String',
    },
    model: {
        type: 'String',
    },
    finish: {
        type: 'String',
    },
    year: {
        type: 'String',
    },
    title: {
        type: 'String',
    },
    created_at: {
        type: 'String',
    },
    shop_name: {
        type: 'String',
    },
    shop: {
        feedback_count: {
            type: 'Number',
        },
        preferred_seller: {
            type: 'Boolean',
        },
        rating_percentage: {
            type: 'Number',
        },
    },
    description: {
        type: 'String',
    },
    condition: {
        uuid: {
            type: 'String',
        },
        display_name: {
            type: 'String',
        },
        slug: {
            type: 'String',
        },
    },
    price: {
        tax_included: {
            type: 'Boolean',
        },
        amount: {
            type: 'String',
        },
        amount_cents: {
            type: 'Number',
        },
        currency: {
            type: 'String',
        },
        symbol: {
            type: 'String',
        },
        display: {
            type: 'String',
        },
    },
    buyer_price: {
        tax_included: {
            type: 'Boolean',
        },
        amount: {
            type: 'String',
        },
        amount_cents: {
            type: 'Number',
        },
        currency: {
            type: 'String',
        },
        symbol: {
            type: 'String',
        },
        display: {
            type: 'String',
        },
    },
    inventory: {
        type: 'Number',
    },
    has_inventory: {
        type: 'Boolean',
    },
    offers_enabled: {
        type: 'Boolean',
    },
    categories: {
        type: ['Mixed'],
    },
    listing_currency: {
        type: 'String',
    },
    published_at: {
        type: 'String',
    },
    state: {
        slug: {
            type: 'String',
        },
        description: {
            type: 'String',
        },
    },
    auction: {
        type: 'Boolean',
    },
    shop_id: {
        type: 'Number',
    },
    shipping: {
        free_expedited_shipping: {
            type: 'Boolean',
        },
        local: {
            type: 'Boolean',
        },
        rates: {
            type: ['Mixed'],
        },
        user_region_rate: {
            region_code: {
                type: 'String',
            },
            rate: {
                amount: {
                    type: 'String',
                },
                amount_cents: {
                    type: 'Number',
                },
                currency: {
                    type: 'String',
                },
                symbol: {
                    type: 'String',
                },
                display: {
                    type: 'String',
                },
            },
            incremental_rate: {
                amount: {
                    type: 'String',
                },
                amount_cents: {
                    type: 'Number',
                },
                currency: {
                    type: 'String',
                },
                symbol: {
                    type: 'String',
                },
                display: {
                    type: 'String',
                },
            },
            carrier_calculated: {
                type: 'Boolean',
            },
            destination_postal_code_needed: {
                type: 'Boolean',
            },
        },
        initial_offer_rate: {
            region_code: {
                type: 'String',
            },
            rate: {
                original: {
                    amount: {
                        type: 'String',
                    },
                    amount_cents: {
                        type: 'Number',
                    },
                    currency: {
                        type: 'String',
                    },
                    symbol: {
                        type: 'String',
                    },
                    display: {
                        type: 'String',
                    },
                },
                display: {
                    amount: {
                        type: 'String',
                    },
                    amount_cents: {
                        type: 'Number',
                    },
                    currency: {
                        type: 'String',
                    },
                    symbol: {
                        type: 'String',
                    },
                    display: {
                        type: 'String',
                    },
                },
            },
            carrier_calculated: {
                type: 'Boolean',
            },
            destination_postal_code_needed: {
                type: 'Boolean',
            },
        },
    },
    in_watchlist: {
        type: 'Boolean',
    },
    _links: {
        photo: {
            href: {
                type: 'String',
            },
        },
        self: {
            href: {
                type: 'String',
            },
        },
        upString: {
            href: {
                type: 'String',
            },
            method: {
                type: 'String',
            },
        },
        bump: {
            href: {
                type: 'String',
            },
        },
        end: {
            href: {
                type: 'String',
            },
            method: {
                type: 'String',
            },
        },
        edit: {
            href: {
                type: 'String',
            },
        },
        web: {
            href: {
                type: 'String',
            },
        },
        make_offer: {
            href: {
                type: 'String',
            },
            method: {
                type: 'String',
            },
        },
        cart: {
            href: {
                type: 'String',
            },
        },
        watchlist: {
            href: {
                type: 'String',
            },
        },
        buy: {
            href: {
                type: 'String',
            },
        },
        flag: {
            href: {
                type: 'String',
            },
        },
        contact_seller: {
            web: {
                href: {
                    type: 'String',
                },
            },
        },
        conversations: {
            href: {
                type: 'String',
            },
        },
        shop: {
            href: {
                type: 'String',
            },
            web: {
                href: {
                    type: 'String',
                },
            },
        },
        comparison_shopping: {
            href: {
                type: 'String',
            },
        },
        sales: {
            href: {
                type: 'String',
            },
        },
        brand: {
            href: {
                type: 'String',
            },
        },
    },
    accepted_payment_methods: {
        type: ['String'],
    },
    location: {
        region: {
            type: 'String',
        },
        locality: {
            type: 'String',
        },
        country_code: {
            type: 'String',
        },
        display_location: {
            type: 'String',
        },
    },
    handmade: {
        type: 'Boolean',
    },
    draft: {
        type: 'Boolean',
    },
    live: {
        type: 'Boolean',
    },
    local_pickup_only: {
        type: 'Boolean',
    },
    cloudinary_photos: {
        type: ['Mixed'],
    },
    photos: [
        {
            _links: {
                large_crop: {
                    href: {
                        type: 'String',
                    },
                },
                small_crop: {
                    href: {
                        type: 'String',
                    },
                },
                full: {
                    href: {
                        type: 'String',
                    },
                },
                thumbnail: {
                    href: {
                        type: 'String',
                    },
                },
            },
        },
    ],
    stats: {
        views: {
            type: 'Number',
        },
        watches: {
            type: 'Number',
        },
    },
    offer_count: {
        type: 'Number',
    },
    shipping_policy: {
        type: 'String',
    },
    sold_as_is: {
        type: 'Boolean',
    },
    upc_does_not_apply: {
        type: 'Boolean',
    },
    origin_country_code: {
        type: 'String',
    },
    estimated_monthly_payment: {
        amount: {
            type: 'String',
        },
        amount_cents: {
            type: 'Number',
        },
        currency: {
            type: 'String',
        },
        symbol: {
            type: 'String',
        },
        display: {
            type: 'String',
        },
    },
    return_policy: {
        description: {
            type: 'String',
        },
    },
    has_offer_for_buyer: {
        type: 'Boolean',
    },
    is_my_listing: {
        type: 'Boolean',
    },
    shipping_profile: {
        name: {
            type: 'String',
        },
        id: {
            type: 'String',
        },
    },
    videos: {
        type: 'Array',
    },
    comparison_shopping_page_id: {
        type: 'String',
    },
    lists: {
        type: ['Mixed'],
    },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;