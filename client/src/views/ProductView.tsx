import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import PageWrapper from '../wrappers/PageWrapper';
import Item from '../interfaces/item';
import { getOneItem } from '../api/item';
import { useParams } from 'react-router';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

// const testInventory: Item[] = [
//     {
//         id: 1,
//         title: 'Epiphone SG 2018 in Heritage Cherry',
//         price: 500,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
//         stock: 1,
//         category: 'Electric/Solid Body',
//     },
//     {
//         id: 2,
//         title: 'Gibson SG 2021 in Heritage Cherry',
//         price: 2000,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
//         stock: 1,
//         category: 'Electric/Solid Body',
//     },
//     {
//         id: 3,
//         title: 'Fender Stratocaster 2002 in Classic White',
//         price: 1000,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
//         stock: 1,
//         category: 'Electric/Solid Body',
//     },
//     {
//         id: 4,
//         title: 'Fender Stratocaster 1980 in Classic White',
//         price: 3000,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
//         stock: 1,
//         category: 'Electric/Solid Body',
//     },
//     {
//         id: 5,
//         title: 'Epiphone SG 2018 in Heritage Cherry',
//         price: 500,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
//         stock: 1,
//         category: 'Electric/Solid Body',
//     },
//     {
//         id: 6,
//         title: 'Gibson SG 2021 in Heritage Cherry',
//         price: 2000,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--WZAAQCCh--/f_auto,t_large/v1589296885/uiavxagfeoznrsgfxbx1.jpg',
//         stock: 1,
//         category: 'Electric/Solid Body',
//     },
//     {
//         id: 7,
//         title: 'Fender Stratocaster 2002 in Classic White',
//         price: 1000,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
//         stock: 1,
//         category: 'Electric/Solid Body',
//     },
//     {
//         id: 8,
//         title: 'Fender Stratocaster 1980 in Classic White',
//         price: 3000,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--fFzeNhRr--/f_auto,t_supersize/v1575566884/tolqlgappeaz4osejqb1.jpg',
//         stock: 1,
//         category: 'Electric/Solid Body',
//     },
//     {
//         id: 9,
//         title: 'Diablo Trucker Hat',
//         price: 25,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--wc9DNSR_--/f_auto,t_large/v1604100023/rg7x572tjtbo218idt9m.jpg',
//         stock: 10,
//         category: 'Merchandise',
//     },
//     {
//         id: 10,
//         title: 'Diablo Hearse Hoodie',
//         price: 45,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--7WYojk-w--/f_auto,t_large/v1625096707/k7bn8q750ysisb80ingi.jpg',
//         stock: 12,
//         category: 'Merchandise',
//     },
//     {
//         id: 11,
//         title: 'Diablo Trucker Hat',
//         price: 25,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--wc9DNSR_--/f_auto,t_large/v1604100023/rg7x572tjtbo218idt9m.jpg',
//         stock: 10,
//         category: 'Merchandise',
//     },
//     {
//         id: 12,
//         title: 'Diablo Hearse Hoodie',
//         price: 45,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--7WYojk-w--/f_auto,t_large/v1625096707/k7bn8q750ysisb80ingi.jpg',
//         stock: 12,
//         category: 'Merchandise',
//     },
//     {
//         id: 13,
//         title: 'Diablo Trucker Hat',
//         price: 25,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--wc9DNSR_--/f_auto,t_large/v1604100023/rg7x572tjtbo218idt9m.jpg',
//         stock: 10,
//         category: 'Merchandise',
//     },
//     {
//         id: 14,
//         title: 'Diablo Hearse Hoodie',
//         price: 45,
//         description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
//         labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
//         animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
//         aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
//         pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
//         commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
//         proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
//         eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
//         Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
//         culpa duis.`,
//         product_image_1:
//             'https://images.reverb.com/image/upload/s--7WYojk-w--/f_auto,t_large/v1625096707/k7bn8q750ysisb80ingi.jpg',
//         stock: 12,
//         category: 'Merchandise',
//     },
// ];

export default function ProductView() {
    const i: Item = {
        id: -1,
        title: '',
        price: {
            amount: '0',
            amount_cents: 0,
            currency: 'USD',
            symbol: '$',
            display: '$0',
        },
        description: '',
        product_image_1: '',
        stock: 0,
        category: '',
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [product, setProduct] = useState<Item>(i);

    interface expectedParams {
        id: string;
    }

    const params = useParams<expectedParams>();

    useEffect(() => {
        getOneItem(params.id)
            .then((res) => {
                console.log(res);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageWrapper>
            <div className=''>
                <div className='max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
                        {/* Image gallery */}
                        <Tab.Group as='div' className='flex flex-col-reverse'>
                            {/* Image selector */}
                            <div className='hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none'>
                                <Tab.List className='grid grid-cols-4 gap-6'>
                                    {product.photos
                                        ?.map(
                                            (photo) =>
                                                photo._links?.small_crop?.href
                                        )
                                        .map((image) => (
                                            <Tab
                                                key={image + '_Photo'}
                                                className='relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50'>
                                                {({ selected }) => (
                                                    <>
                                                        <span className='sr-only'>
                                                            {image +
                                                                ' - ' +
                                                                product.title}
                                                        </span>
                                                        <span className='absolute inset-0 overflow-hidden rounded-md'>
                                                            <img
                                                                src={image}
                                                                alt=''
                                                                className='object-cover object-center w-full h-full'
                                                            />
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                selected
                                                                    ? 'ring-indigo-500'
                                                                    : 'ring-transparent',
                                                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                            )}
                                                            aria-hidden='true'
                                                        />
                                                    </>
                                                )}
                                            </Tab>
                                        ))}
                                </Tab.List>
                            </div>

                            <Tab.Panels className='w-full aspect-w-1 aspect-h-1 h-[80vh] overflow-y-hidden sm:rounded-lg align-middle'>
                                {product.photos
                                    ?.map(
                                        (photo) =>
                                            photo._links?.large_crop?.href
                                    )
                                    .map((image, index) => (
                                        <Tab.Panel key={image + '_panel'}>
                                            <img
                                                src={image}
                                                alt={image}
                                                className='object-cover object-center w-full h-full sm:rounded-lg'
                                                onClick={() => {
                                                    //open a new tab with the image
                                                    product.cloudinary_photos &&
                                                        window.open(
                                                            product
                                                                .cloudinary_photos[
                                                                index
                                                            ].preview_url
                                                        );
                                                }}
                                            />
                                        </Tab.Panel>
                                    ))}
                            </Tab.Panels>
                        </Tab.Group>

                        {/* Product info */}
                        <div className='px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0'>
                            <h1 className='text-3xl font-extrabold tracking-tight text-grey-200'>
                                {product.title}
                            </h1>

                            <div className='mt-3'>
                                <h2 className='sr-only'>Product information</h2>
                                <p className='text-3xl text-grey-200'>
                                    {product.price?.display}
                                </p>
                            </div>

                            <div className='mt-6'>
                                <h3 className='sr-only'>Description</h3>

                                <div
                                    className='space-y-6 text-base text-grey-300'
                                    dangerouslySetInnerHTML={{
                                        __html: product.description || '',
                                    }}
                                />
                            </div>

                            <form className='mt-6'>
                                <div className='flex mt-10 sm:flex-col1'>
                                    <button
                                        type='submit'
                                        className='flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-grey-600 hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-grey-500 sm:w-full'>
                                        Add to cart
                                    </button>

                                    {/* <button
                                        type='button'
                                        className='flex items-center justify-center px-3 py-3 ml-4 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500'>
                                        <HeartIcon
                                            className='flex-shrink-0 w-6 h-6'
                                            aria-hidden='true'
                                        />
                                        <span className='sr-only'>
                                            Add to favorites
                                        </span>
                                    </button> */}
                                </div>
                            </form>

                            <section
                                aria-labelledby='details-heading'
                                className='mt-12'>
                                <h2 id='details-heading' className='sr-only'>
                                    Additional details
                                </h2>

                                {/* <div className='border-t divide-y divide-gray-200'>
                                    {product.details?.map((detail) => (
                                        <Disclosure as='div' key={detail.name}>
                                            {({ open }) => (
                                                <>
                                                    <h3>
                                                        <Disclosure.Button className='relative flex items-center justify-between w-full py-6 text-left group'>
                                                            <span
                                                                className={classNames(
                                                                    open
                                                                        ? 'text-indigo-600'
                                                                        : 'text-gray-900',
                                                                    'text-sm font-medium'
                                                                )}>
                                                                {detail.name}
                                                            </span>
                                                            <span className='flex items-center ml-6'>
                                                                {open ? (
                                                                    <MinusSmIcon
                                                                        className='block w-6 h-6 text-indigo-400 group-hover:text-indigo-500'
                                                                        aria-hidden='true'
                                                                    />
                                                                ) : (
                                                                    <PlusSmIcon
                                                                        className='block w-6 h-6 text-gray-400 group-hover:text-gray-500'
                                                                        aria-hidden='true'
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel
                                                        as='div'
                                                        className='pb-6 prose-sm prose'>
                                                        <ul>
                                                            {detail.items.map(
                                                                (item) => (
                                                                    <li
                                                                        key={
                                                                            item
                                                                        }>
                                                                        {item}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </div> */}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
