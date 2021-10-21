import { Tab } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getOneReverbPost, importReverbPostByID } from '../api/reverb';
import Item from '../interfaces/item';
import PageWrapper from '../wrappers/PageWrapper';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const ReverbListing = () => {
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
        getOneReverbPost(params.id)
            .then((res:any) => {
                console.log(res);
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
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

                            <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
                                {product.photos
                                    ?.map((photo) => photo._links?.full?.href)
                                    .map((image) => (
                                        <Tab.Panel key={image + '_panel'}>
                                            <img
                                                src={image}
                                                alt={image}
                                                className='object-cover object-center w-full h-full sm:rounded-lg'
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
                                        className='flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-grey-600 hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-grey-500 sm:w-full disabled:bg-grey-700'
                                        onClick={
                                            (e) => {
                                                e.preventDefault();
                                                let thisButton:EventTarget&HTMLButtonElement = e.currentTarget;
                                                thisButton.disabled = true;
                                                params.id && importReverbPostByID(params.id);
                                            }
                                        }>
                                        Import to Catalog
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
};

export default ReverbListing;
