const TEST_NAVIGATION = {
    categories: [
        {
            id: 'shop',
            name: 'Shop',
            featured: [
                {
                    name: 'Guitars',
                    href: '/guitars',
                    imageSrc:
                        'https://i1.wp.com/www.diabloguitars.com/wp-content/uploads/2021/06/sbbiuxbnzcx5ruwulaey.jpg?fit=800%2C792&ssl=1',
                    imageAlt: 'Close up of chrome stratocaster',
                },
                {
                    name: 'Accessories',
                    href: '/accessories',
                    imageSrc:
                        'https://images.reverb.com/image/upload/s--TEbPdDRu--/f_auto,t_large/v1614029515/n2ihnr8ptqmqzwrc6x0k.jpg',
                    imageAlt: 'Guitar picks',
                },
                {
                    name: 'Amplifiers',
                    href: '/amps',
                    imageSrc:
                        'https://i2.wp.com/www.diabloguitars.com/wp-content/uploads/2021/11/jah4qgd20i3bl2uara9g.jpg?fit=800%2C800&ssl=1',
                    imageAlt: 'Jimi Hendrix Univibe pedal.',
                },
                {
                    name: 'Pickups & Parts',
                    href: '/pickups',
                    imageSrc:
                        'https://i0.wp.com/www.diabloguitars.com/wp-content/uploads/2021/07/qkepmwgag3tuv6ok3a8a.jpg?fit=800%2C800&ssl=1',
                    imageAlt: 'Bare Knuckle PG Blues in box.',
                },
            ],
            sections: [
                [
                    {
                        id: 'guitars',
                        name: 'Guitars',
                        items: [
                            { name: 'All', href: '/guitars/' },
                            { name: 'Fender', href: '/guitars/fender' },
                            { name: 'Gibson', href: '/guitars/gibson' },
                            { name: 'Jackson', href: '/guitars/jackson' },
                            { name: 'ESP', href: '/guitars/esp' },
                            { name: 'Gretsch', href: '/guitars/gretsch' },
                            { name: 'Dean', href: '/guitars/dean' },
                            { name: 'Ibanez', href: '/guitars/ibanez' },
                            { name: 'G&L', href: '/guitars/g&l' },
                        ],
                    },
                ],
                [
                    {
                        id: 'amps',
                        name: 'Amps',
                        items: [
                            { name: 'All', href: '/amps/' },
                            { name: 'Fender', href: '/amps/fender' },
                            { name: 'Marshall', href: '/amps/marshall' },
                            { name: 'VOX', href: '/amps/vox' },
                            { name: 'EVH', href: '/amps/evh' },
                            { name: 'Boutique', href: '/amps/boutique' },
                        ],
                    },
                    {
                        id: 'pickups',
                        name: 'Pickups',
                        items: [
                            { name: 'All', href: '/pickups/' },
                            {
                                name: 'Bare Knuckle',
                                href: '/pickups/bare-knuckle',
                            },
                            {
                                name: 'Seymour Duncan',
                                href: '/pickups/seymour-duncan',
                            },
                        ],
                    },
                ],
                [
                    {
                        id: 'merchandise',
                        name: 'Merch',
                        items: [
                            {
                                name: 'All Categories',
                                href: '/merchandise',
                            },
                            { name: 'Clothing', href: '/merchandise/clothing' },
                            {
                                name: 'Guitar Accessories',
                                href: '/merchandise/accessories',
                            },
                            { name: 'Gig Bags', href: '/merchandise/gigbags' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'Accessories',
                        items: [
                            {
                                name: 'Pedals',
                                href: '/accessories/pedals',
                            },
                            { name: 'Straps', href: '/accessories/straps' },
                            {
                                name: 'Cables',
                                href: '/accessories/cables',
                            },
                            { name: 'Cases', href: '/accessories/cases' },
                        ],
                    },
                ],
            ],
        },
    ],
    pages: [
        { name: 'Sell Your Guitar', href: '/sell-us-your-guitar' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Appointments', href: '/appointments' },
        { name: 'Contact Us', href: '/contact' },
    ],
};

export default TEST_NAVIGATION;
