import React from 'react';
import Navigation from '../components/Navigation';
import ShopView from '../components/ShopView';
import Footer from '../components/Footer';

const Shop = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const testInventory = [
        {
            id: 1,
            name: 'Epiphone SG 2018 in Heritage Cherry',
            price: 500,
            description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.`,
            imageSrc:
                'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 2,
            name: 'Gibson SG 2021 in Heritage Cherry',
            price: 2000,
            description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.`,
            imageSrc:
                'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 3,
            name: 'Fender Stratocaster 2002 in Classic White',
            price: 1000,
            description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.`,
            imageSrc:
                'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 4,
            name: 'Fender Stratocaster 1980 in Classic White',
            price: 3000,
            description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.`,
            imageSrc:
                'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 5,
            name: 'Epiphone SG 2018 in Heritage Cherry',
            price: 500,
            description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.`,
            imageSrc:
                'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 6,
            name: 'Gibson SG 2021 in Heritage Cherry',
            price: 2000,
            description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.`,
            imageSrc:
                'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 7,
            name: 'Fender Stratocaster 2002 in Classic White',
            price: 1000,
            description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.`,
            imageSrc:
                'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 8,
            name: 'Fender Stratocaster 1980 in Classic White',
            price: 3000,
            description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.`,
            imageSrc:
                'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
    ];

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Navigation />
            <div className='container flex flex-row items-center justify-end px-4 pt-8 mx-auto md:max-w-2xl sm:px-6 lg:px-8 xl:max-w-7xl lg:max-w-5xl'>
                <></>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full p-2 rounded-md bg-grey-800 sm:w-72'
                />
            </div>
            <div className='container mx-auto'>
                <ShopView inventory={testInventory} searchTerm={searchTerm} />
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
