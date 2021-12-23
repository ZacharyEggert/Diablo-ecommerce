import Loading from '@components/Loading';
import { Tab } from '@headlessui/react';
// import {
//     HeartIcon,
//     MinusSmIcon,
//     PlusSmIcon,
//     StarIcon,
// } from '@heroicons/react/solid';
import classNames from '@lib/util/classNames';
import formatPrice from '@lib/util/formatPrice';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useListingBySlugQuery } from 'src/generated/graphql';

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
    const router = useRouter();
    const { slug } = router.query;

    const [{ fetching, data, error }, call] = useListingBySlugQuery({
        variables: {
            slug: slug
                ? slug.length !== undefined
                    ? (slug as string)
                    : slug[0]
                : '',
        },
    });

    const product = data?.listingBySlug.data;

    useEffect(() => {
        if (slug) call();
    }, [slug]);

    return (
        <div className='max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            {fetching && (
                <div className='flex items-center justify-center h-full'>
                    <div className='h-48 max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                        <Loading className='w-48 h-48' />
                        <h2 className='text-4xl text-center animate-pulse'>
                            Loading ...
                        </h2>
                    </div>
                </div>
            )}
            {!fetching && (error || !product || data.listingBySlug.errors) && (
                <div>
                    <div className='h-20'></div>
                    <div className='flex items-center justify-center h-full'>
                        <div className='h-48 max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                            <h2 className='text-4xl text-center animate-pulse'>
                                An Error occurred. Please try again later.
                            </h2>
                        </div>
                    </div>
                </div>
            )}
            {!error && !data?.listingBySlug.errors && product && (
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
                    {/* Image gallery */}
                    <Tab.Group as='div' className='flex flex-col-reverse'>
                        {/* Image selector */}
                        <div className='hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none'>
                            <Tab.List className='grid grid-cols-4 gap-6'>
                                {product.photos.map((image) => (
                                    <Tab
                                        key={image}
                                        className='relative flex items-center justify-center h-24 text-sm font-medium uppercase bg-white rounded-md cursor-pointer text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50'>
                                        {({ selected }) => (
                                            <>
                                                {/* <span className='sr-only'>
                                                    {image.name}
                                                </span> */}
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
                            {product.photos.map((image) => (
                                <Tab.Panel
                                    key={image}
                                    className='relative overflow-hidden rounded-lg'>
                                    <img
                                        src={image}
                                        // alt={image}
                                        className='object-cover object-center w-full h-full aspect-[7/8] sm:rounded-lg blur-md'
                                    />
                                    <div className='absolute top-0 left-0 grid w-full h-full aspect-square place-items-center'>
                                        <img
                                            src={image}
                                            // alt={image}
                                            className='object-center w-auto h-auto max-w-full max-h-full sm:rounded-lg'
                                        />
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>

                    {/* Product info */}
                    <div className='px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0'>
                        <h1 className='text-3xl font-bold tracking-tight text-neutral-100'>
                            {product.title}
                        </h1>

                        <div className='mt-3'>
                            <h2 className='sr-only'>Product information</h2>
                            <p className='text-3xl text-neutral-100'>
                                {formatPrice(product.price)}
                            </p>
                        </div>

                        {/* Reviews */}
                        {/* <div className='mt-3'>
                            <h3 className='sr-only'>Reviews</h3>
                            <div className='flex items-center'>
                                <div className='flex items-center'>
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                product.rating > rating
                                                    ? 'text-indigo-500'
                                                    : 'text-neutral-300',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden='true'
                                        />
                                    ))}
                                </div>
                                <p className='sr-only'>
                                    {product.rating} out of 5 stars
                                </p>
                            </div>
                        </div> */}

                        <div className='mt-6'>
                            <h3 className='sr-only'>Description</h3>

                            <div
                                className='space-y-6 text-base text-neutral-300'
                                dangerouslySetInnerHTML={{
                                    __html: product.description,
                                }}
                            />
                        </div>

                        <form className='mt-6'>
                            {/* Colors */}
                            {/* <div>
                                <h3 className='text-sm text-neutral-600'>Color</h3>

                                <RadioGroup
                                    value={selectedColor}
                                    onChange={setSelectedColor}
                                    className='mt-2'>
                                    <RadioGroup.Label className='sr-only'>
                                        Choose a color
                                    </RadioGroup.Label>
                                    <div className='flex items-center space-x-3'>
                                        {product.colors.map((color) => (
                                            <RadioGroup.Option
                                                key={color.name}
                                                value={color}
                                                className={({
                                                    active,
                                                    checked,
                                                }) =>
                                                    classNames(
                                                        color.selectedColor,
                                                        active && checked
                                                            ? 'ring ring-offset-1'
                                                            : '',
                                                        !active && checked
                                                            ? 'ring-2'
                                                            : '',
                                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                                    )
                                                }>
                                                <RadioGroup.Label
                                                    as='p'
                                                    className='sr-only'>
                                                    {color.name}
                                                </RadioGroup.Label>
                                                <span
                                                    aria-hidden='true'
                                                    className={classNames(
                                                        color.bgColor,
                                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                                    )}
                                                />
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div> */}

                            {/* <div className='flex mt-10 sm:flex-col1'>
                                <button
                                    type='submit'
                                    className='flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 focus:ring-indigo-500 sm:w-full'>
                                    Add to bag
                                </button>

                                <button
                                    type='button'
                                    className='flex items-center justify-center px-3 py-3 ml-4 rounded-md text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500'>
                                    <HeartIcon
                                        className='flex-shrink-0 w-6 h-6'
                                        aria-hidden='true'
                                    />
                                    <span className='sr-only'>
                                        Add to favorites
                                    </span>
                                </button>
                            </div> */}
                        </form>

                        {/* <section
                            aria-labelledby='details-heading'
                            className='mt-12'>
                            <h2 id='details-heading' className='sr-only'>
                                Additional details
                            </h2>

                            <div className='border-t divide-y divide-neutral-200'>
                                {product.details !== undefined &&
                                    product.details.map((detail) => (
                                        <Disclosure as='div' key={detail.name}>
                                            {({ open }) => (
                                                <>
                                                    <h3>
                                                        <Disclosure.Button className='relative flex items-center justify-between w-full py-6 text-left group'>
                                                            <span
                                                                className={classNames(
                                                                    open
                                                                        ? 'text-indigo-600'
                                                                        : 'text-neutral-900',
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
                                                                        className='block w-6 h-6 text-neutral-400 group-hover:text-neutral-500'
                                                                        aria-hidden='true'
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel
                                                        as='div'
                                                        className='pb-6 prose-sm prose'>
                                                        <ul role='list'>
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
                            </div>
                        </section> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Category;
