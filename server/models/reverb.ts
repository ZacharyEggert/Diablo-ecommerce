/* eslint-disable camelcase */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reverbSchema = new Schema({
    id: {
        type: 'Number',
        index: { unique: true },
        required: true,
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
        description: {
            type: 'String',
        },
    },
    price: {
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
    hasInventory: {
        type: 'Boolean',
    },
    offers_enabled: {
        type: 'Boolean',
    },
    auction: {
        type: 'Boolean',
    },
    categories: [
        {
            uuid: {
                type: 'String',
            },
            full_name: {
                type: 'String',
            },
        }
    ],
    listingCurrency: {
        type: 'String',
    },
    published_at: {
        type: 'String',
    },
    buyer_price: {
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
        tax_included_hint: {
            type: 'String',
        },
        tax_included: {
            type: 'Boolean',
        },
        tax_included_rate: {
            type: 'Number',
        },
    },
    seller_price: {
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
    state: {
        slug: {
            type: 'String',
        },
        description: {
            type: 'String',
        },
    },
    shipping_profile_id: {
        type: 'Number',
    },
    shipping: {
        local: {
            type: 'Boolean',
        },
        rates: [
            {
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
            },
        ],
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
        },
        free_expedited_shipping: {
            type: 'Boolean',
        },
    },
    stats: {
        views: {
            type: 'Number',
        },
        watches: {
            type: 'Number',
        },
    },
    slug: {
        type: 'String',
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
        update: {
            method: {
                type: 'String',
            },
            href: {
                type: 'String',
            },
        },
        bump: {
            method: {
                type: 'String',
            },
            href: {
                type: 'String',
            },
        },
        end: {
            method: {
                type: 'String',
            },
            href: {
                type: 'String',
            },
        },
        want: {
            method: {
                type: 'String',
            },
            href: {
                type: 'String',
            },
        },
        unwant: {
            method: {
                type: 'String',
            },
            href: {
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
            method: {
                type: 'String',
            },
            href: {
                type: 'String',
            },
        },
        add_to_wishlist: {
            method: {
                type: 'String',
            },
            href: {
                type: 'String',
            },
        },
        remove_from_wishlist: {
            method: {
                type: 'String',
            },
            href: {
                type: 'String',
            },
        },
        cart: {
            href: {
                type: 'String',
            },
        },
    },
    
});

const Reverb = mongoose.model('Reverb', reverbSchema);

export default Reverb;