interface category {
    name: string;
    slug: string;
    description: string;
}

const categories: { [any: string]: category } = {
    solidBody: {
        name: 'Solid Body',
        slug: 'solid-body',
        description: 'Solid Body Guitars',
    },
    hollowBody: {
        name: 'Hollow Body',
        slug: 'hollow-body',
        description: 'Hollow Body Guitars',
    },
    acoustic: {
        name: 'Acoustic',
        slug: 'acoustic',
        description: 'Acoustic Guitars',
    },
    electric: {
        name: 'Electric',
        slug: 'electric',
        description: 'Electric Guitars',
    },
    bass: {
        name: 'Bass Guitars',
        slug: 'bass',
        description: 'Bass Guitars',
    },
    accessories: {
        name: 'Accessories',
        slug: 'accessories',
        description: 'Accessories',
    },
    guitarPickups: {
        name: 'Guitar Pickups',
        slug: 'guitar-pickups',
        description: 'Guitar Pickups',
    },
    amps: {
        name: 'Amps',
        slug: 'amps',
        description: 'Amps',
    },
    ampCombos: {
        name: 'Combos',
        slug: 'amp-combos',
        description: 'Combo Amp / Cabinets',
    },
    ampCabinets: {
        name: 'Cabinets',
        slug: 'amp-cabinets',
        description: 'Cabinets',
    },
    merchandise: {
        name: 'Merchandise',
        slug: 'merchandise',
        description: 'Merchandise',
    },
};

export const categoryNames = Object.values(categories).map(
    (category) => category.name
);
export const categorySlugs = Object.values(categories).map(
    (category) => category.slug
);
export const getCategoryFromSlug = (slug: string): category | null => {
    for (const cat in categories) {
        if (categories[cat].slug === slug) {
            return categories[cat];
        }
    }
    return null;
};
