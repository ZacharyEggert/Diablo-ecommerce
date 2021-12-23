/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useCartContext } from '@lib/state/cartState';
import { useListingsBySlugsQuery } from 'src/generated/graphql';
import { addPricesFromProducts } from '@lib/util/addPrices';
import formatPrice from '@lib/util/formatPrice';
import Link from 'next/link';
import Loading from './Loading';

interface ShoppingCartProps {}

const ShoppingCart: FC<ShoppingCartProps> = ({}) => {
    const [state, dispatch] = useCartContext();
    const open = state.isOpen;

    const [products, setProducts] = useState<
        | Array<{
              __typename?: 'Listing';
              title: string;
              id: number;
              reverbId?: number | null | undefined;
              reverbSku?: string | null | undefined;
              reverbImagesImported?: boolean | null | undefined;
              slug: string;
              photos: Array<string>;
              price: number;
              categories: Array<string>;
              condition: string;
              description: string;
              finish?: string | null | undefined;
              year?: string | null | undefined;
              submodel?: string | null | undefined;
              model: string;
              make: string;
          }>
        | null
        | undefined
    >();

    const [{ data, fetching, error }, call] = useListingsBySlugsQuery({
        variables: { slugs: state.slugs.map((slug) => slug as string) },
    });

    useEffect(() => {
        if (data && data.listingsBySlugs) {
            setProducts(data.listingsBySlugs.data);
        }
    }, [data]);

    useEffect(() => {
        call();
    }, [state.slugs]);

    const setOpen = () => {
        dispatch({ type: 'openCart' });
    };

    const removeFromCart = (slug: string) => {
        dispatch({ type: 'remove', payload: slug });
    };

    const setClose = () => {
        dispatch({ type: 'closeCart' });
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed inset-0 z-30 overflow-hidden'
                onClose={setClose}>
                <div className='absolute inset-0 overflow-hidden'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-in-out duration-200'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in-out duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <Dialog.Overlay className='absolute inset-0 transition-opacity bg-opacity-75 bg-neutral-700' />
                    </Transition.Child>

                    <div className='fixed inset-y-0 right-0 flex max-w-full pl-10'>
                        <Transition.Child
                            as={Fragment}
                            enter='transform transition ease-in-out duration-100 sm:duration-200'
                            enterFrom='translate-x-full'
                            enterTo='translate-x-0'
                            leave='transform transition ease-in-out duration-100 sm:duration-200'
                            leaveFrom='translate-x-0'
                            leaveTo='translate-x-full'>
                            <div className='w-screen max-w-md'>
                                <div className='flex flex-col h-full overflow-y-scroll shadow-xl bg-neutral-900'>
                                    <div className='flex-1 px-4 py-6 overflow-y-auto sm:px-6'>
                                        <div className='flex items-start justify-between'>
                                            <Dialog.Title className='text-lg font-medium text-neutral-100'>
                                                Shopping cart
                                            </Dialog.Title>
                                            <div className='flex items-center ml-3 h-7'>
                                                <button
                                                    type='button'
                                                    className='p-2 -m-2 text-neutral-500 hover:text-neutral-300'
                                                    onClick={() => setClose()}>
                                                    <span className='sr-only'>
                                                        Close panel
                                                    </span>
                                                    <XIcon
                                                        className='w-6 h-6'
                                                        aria-hidden='true'
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <div className='mt-8'>
                                            <div className='flow-root'>
                                                <ul
                                                    role='list'
                                                    className='-my-6 divide-y divide-neutral-200'>
                                                    {!fetching &&
                                                        !error &&
                                                        products &&
                                                        products.map(
                                                            (product) => (
                                                                <li
                                                                    key={
                                                                        product.id
                                                                    }
                                                                    className='flex py-6'>
                                                                    <div className='flex-shrink-0 w-24 h-24 overflow-hidden border rounded-md border-neutral-200'>
                                                                        <img
                                                                            src={
                                                                                product
                                                                                    .photos[0]
                                                                            }
                                                                            className='object-cover object-center w-full h-full'
                                                                        />
                                                                    </div>

                                                                    <div className='flex flex-col flex-1 ml-4'>
                                                                        <div>
                                                                            <div className='flex justify-between text-base font-medium text-neutral-200'>
                                                                                <h3>
                                                                                    <Link
                                                                                        href={
                                                                                            '/products/' +
                                                                                            product.slug
                                                                                        }>
                                                                                        <>
                                                                                            {product.title.substring(
                                                                                                0,
                                                                                                60
                                                                                            )}
                                                                                            ...
                                                                                        </>
                                                                                    </Link>
                                                                                </h3>
                                                                                <p className='ml-4'>
                                                                                    {formatPrice(
                                                                                        product.price
                                                                                    )}
                                                                                </p>
                                                                            </div>
                                                                            <p className='mt-1 text-sm text-neutral-500'>
                                                                                {/* {
                                                                            product.make
                                                                        } */}
                                                                            </p>
                                                                        </div>
                                                                        <div className='flex items-end justify-between flex-1 text-sm'>
                                                                            <p className='text-neutral-500'>
                                                                                Qty{' '}
                                                                                {
                                                                                    1
                                                                                }
                                                                            </p>

                                                                            <div className='flex'>
                                                                                <button
                                                                                    type='button'
                                                                                    onClick={() => {
                                                                                        removeFromCart(
                                                                                            product.slug
                                                                                        );
                                                                                    }}
                                                                                    className='font-medium text-red-600 hover:text-red-500'>
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                    {fetching && (
                                                        <li className='py-6'>
                                                            <div className='flex justify-center pt-16'>
                                                                <Loading className='w-1/3 aspect-square text-neutral-300' />
                                                            </div>
                                                        </li>
                                                    )}
                                                    {error && (
                                                        <li className='py-6'>
                                                            <div className='flex justify-center pt-16'>
                                                                <p className='text-xl text-red-600'>
                                                                    An Error has
                                                                    occurred
                                                                </p>
                                                            </div>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-4 py-6 border-t border-neutral-800 sm:px-6'>
                                        <div className='flex justify-between text-base font-medium text-neutral-200'>
                                            <p>Subtotal</p>
                                            <p>
                                                {formatPrice(
                                                    addPricesFromProducts(
                                                        products
                                                    )
                                                )}
                                            </p>
                                        </div>
                                        <p className='mt-0.5 text-sm text-neutral-500'>
                                            Shipping and taxes calculated at
                                            checkout.
                                        </p>
                                        <div className='mt-6'>
                                            <Link href='#'>
                                                <span className='flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 hover:cursor-pointer'>
                                                    Checkout
                                                </span>
                                            </Link>
                                        </div>
                                        <div className='flex justify-center mt-6 text-sm text-center text-neutral-500'>
                                            <p>
                                                or{' '}
                                                <button
                                                    type='button'
                                                    className='font-medium text-red-600 hover:text-red-500'
                                                    onClick={() => setClose()}>
                                                    Continue Shopping
                                                    <span aria-hidden='true'>
                                                        {' '}
                                                        &rarr;
                                                    </span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ShoppingCart;
