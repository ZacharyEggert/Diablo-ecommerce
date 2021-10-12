import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './views/AboutUs';
import Appointments from './views/Appointments';
import ContactUs from './views/ContactUs';
import Merchandise from './views/Merchandise';
import NotFound from './views/NotFound';
import SellUsYourGuitars from './views/SellUsYourGuitars';
import ReverbListings from './views/ReverbListings'
import Shop from './views/Shop';
import Item from './interfaces/item';

const App = () => {

    
    const testInventory: Item[] = [
        {
            id: 1,
            title: 'Epiphone SG 2018 in Heritage Cherry',
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 2,
            title: 'Gibson SG 2021 in Heritage Cherry',
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 3,
            title: 'Fender Stratocaster 2002 in Classic White',
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 4,
            title: 'Fender Stratocaster 1980 in Classic White',
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 5,
            title: 'Epiphone SG 2018 in Heritage Cherry',
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 6,
            title: 'Gibson SG 2021 in Heritage Cherry',
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 7,
            title: 'Fender Stratocaster 2002 in Classic White',
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 8,
            title: 'Fender Stratocaster 1980 in Classic White',
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
            stock: 1,
            category: 'Electric/Solid Body',
        },
        {
            id: 9,
            title: 'Diablo Trucker Hat',
            price: 25,
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--wc9DNSR_--/f_auto,t_large/v1604100023/rg7x572tjtbo218idt9m.jpg',
            stock: 10,
            category: 'Merchandise',
        },
        {
            id: 10,
            title: 'Diablo Hearse Hoodie',
            price: 45,
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--7WYojk-w--/f_auto,t_large/v1625096707/k7bn8q750ysisb80ingi.jpg',
            stock: 12,
            category: 'Merchandise',
        },
        {
            id: 11,
            title: 'Diablo Trucker Hat',
            price: 25,
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--wc9DNSR_--/f_auto,t_large/v1604100023/rg7x572tjtbo218idt9m.jpg',
            stock: 10,
            category: 'Merchandise',
        },
        {
            id: 12,
            title: 'Diablo Hearse Hoodie',
            price: 45,
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--7WYojk-w--/f_auto,t_large/v1625096707/k7bn8q750ysisb80ingi.jpg',
            stock: 12,
            category: 'Merchandise',
        },
        {
            id: 13,
            title: 'Diablo Trucker Hat',
            price: 25,
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--wc9DNSR_--/f_auto,t_large/v1604100023/rg7x572tjtbo218idt9m.jpg',
            stock: 10,
            category: 'Merchandise',
        },
        {
            id: 14,
            title: 'Diablo Hearse Hoodie',
            price: 45,
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
            product_image_1:
                'https://images.reverb.com/image/upload/s--7WYojk-w--/f_auto,t_large/v1625096707/k7bn8q750ysisb80ingi.jpg',
            stock: 12,
            category: 'Merchandise',
        },
    ];

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Shop inventory={testInventory}/>
                </Route>
                <Route path='/sell-us-your-guitars'>
                    <SellUsYourGuitars />
                </Route>
                <Route path='/appointments'>
                    <Appointments />
                </Route>
                <Route path='/contact'>
                    <ContactUs />
                </Route>
                <Route path='/about-us'>
                    <AboutUs />
                </Route>
                <Route path='/reverb-listings'>
                    <ReverbListings />
                </Route>

                <Route path='/merchandise'>
                    <Merchandise inventory={testInventory}/>
                </Route>
                <Route path='/item/:id'></Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
