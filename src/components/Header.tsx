import { Fragment, useEffect, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import {
    MenuIcon,
    // SearchIcon,
    ShoppingCartIcon,
    // UserIcon,
    XIcon,
} from '@heroicons/react/outline';
import navigation from '@lib/navigation';
import classNames from '@lib/util/classNames';
import { useCartContext } from '@lib/state/cartState';
import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
    const [cartState, cartDispatch] = useCartContext();

    const openCart = () => {
        cartDispatch({ type: 'openCart' });
    };

    useEffect(() => {
        // get cart state from local storage
        try {
            const cartState = localStorage.getItem('cartState');
            if (cartState) {
                cartDispatch({
                    type: 'setCart',
                    payload: JSON.parse(cartState).slugs,
                });
            }
        } catch (error) {
            console.error(error);
        }
    }, []);
    const cartCount = cartState.slugs.length;

    const [open, setOpen] = useState(false);

    return (
        <div className='fixed z-30 w-full bg-neutral-800'>
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as='div'
                    className='fixed inset-0 z-40 flex lg:hidden'
                    onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter='transition-opacity ease-linear duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity ease-linear duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter='transition ease-in-out duration-300 transform'
                        enterFrom='-translate-x-full'
                        enterTo='translate-x-0'
                        leave='transition ease-in-out duration-300 transform'
                        leaveFrom='translate-x-0'
                        leaveTo='-translate-x-full'>
                        <div className='relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto shadow-xl bg-neutral-800'>
                            <div className='flex px-4 pt-5 pb-2'>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center p-2 -m-2 rounded-md text-neutral-400'
                                    onClick={() => setOpen(false)}>
                                    <span className='sr-only'>Close menu</span>
                                    <XIcon
                                        className='w-6 h-6'
                                        aria-hidden='true'
                                    />
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as='div' className='mt-2'>
                                <div className='border-b border-neutral-200'>
                                    <Tab.List className='flex px-4 -mb-px space-x-8'>
                                        {navigation.categories.map(
                                            (category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected
                                                                ? 'text-red-600 border-red-600'
                                                                : 'text-neutral-900 border-transparent',
                                                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                        )
                                                    }>
                                                    {category.name}
                                                </Tab>
                                            )
                                        )}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel
                                            key={category.name}
                                            className='px-4 pt-10 pb-8 space-y-10'>
                                            <div className='space-y-4'>
                                                {category.featured.map(
                                                    (item, itemIdx) => (
                                                        <div
                                                            key={itemIdx}
                                                            className='relative overflow-hidden rounded-md bg-neutral-100 group aspect-w-1 aspect-h-1'>
                                                            <img
                                                                src={
                                                                    item.imageSrc
                                                                }
                                                                alt={
                                                                    item.imageAlt
                                                                }
                                                                className='object-cover object-center group-hover:opacity-75'
                                                            />
                                                            <div className='flex flex-col justify-end'>
                                                                <div className='p-4 text-base bg-white bg-opacity-60 sm:text-sm'>
                                                                    <Link
                                                                        as={'a'}
                                                                        href={
                                                                            item.href
                                                                        }>
                                                                        <>
                                                                            <span
                                                                                className='absolute inset-0 font-medium text-neutral-900'
                                                                                aria-hidden='true'
                                                                            />
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </>
                                                                    </Link>
                                                                    <p
                                                                        aria-hidden='true'
                                                                        className='mt-0.5 text-neutral-200 sm:mt-1'>
                                                                        Shop now
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            {category.sections.map(
                                                (column, columnIdx) => (
                                                    <div
                                                        key={columnIdx}
                                                        className='space-y-10'>
                                                        {column.map(
                                                            (section) => (
                                                                <div
                                                                    key={
                                                                        section.name
                                                                    }>
                                                                    <p
                                                                        id={`${category.id}-${section.id}-heading-mobile`}
                                                                        className='font-medium text-neutral-200'>
                                                                        {
                                                                            section.name
                                                                        }
                                                                    </p>
                                                                    <ul
                                                                        role='list'
                                                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                        className='flex flex-col mt-6 space-y-6'>
                                                                        {section.items.map(
                                                                            (
                                                                                item
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        item.name
                                                                                    }
                                                                                    className='flow-root'>
                                                                                    <a
                                                                                        href={
                                                                                            item.href
                                                                                        }
                                                                                        className='block p-2 -m-2 text-neutral-400'>
                                                                                        {
                                                                                            item.name
                                                                                        }
                                                                                    </a>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            <div className='px-4 py-6 space-y-6 border-t border-neutral-200'>
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className='flow-root'>
                                        <Link href={page.href}>
                                            <span className='block p-2 -m-2 font-medium text-neutral-200'>
                                                {page.name}
                                            </span>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <div className='px-4 py-6 border-t border-neutral-200'>
                                <Link href='#'>
                                    <div className='flex items-center p-2 -m-2'>
                                        <img
                                            src='https://tailwindui.com/img/flags/flag-united-states.svg'
                                            alt=''
                                            className='flex-shrink-0 block w-5 h-auto'
                                        />
                                        <span className='block ml-3 text-base font-medium text-neutral-200'>
                                            USD
                                        </span>
                                        <span className='sr-only'>
                                            , change currency
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className='relative bg-neutral-800'>
                <nav
                    aria-label='Top'
                    className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                    <div className='border-b border-neutral-600'>
                        <div className='flex items-center justify-between h-16'>
                            <div className='flex items-center flex-1 lg:hidden'>
                                <button
                                    type='button'
                                    className='p-2 -ml-2 rounded-md text-neutral-400 bg-inherit'
                                    onClick={() => setOpen(true)}>
                                    <span className='sr-only'>Open menu</span>
                                    <MenuIcon
                                        className='w-6 h-6'
                                        aria-hidden='true'
                                    />
                                </button>

                                {/* <a
                                    href='#'
                                    className='p-2 ml-2 text-neutral-400 hover:text-neutral-500'>
                                    <span className='sr-only'>Search</span>
                                    <SearchIcon
                                        className='w-6 h-6'
                                        aria-hidden='true'
                                    />
                                </a> */}
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className='hidden lg:flex-1 lg:block lg:self-stretch'>
                                <div className='flex h-full space-x-8'>
                                    {navigation.categories.map((category) => (
                                        <Popover
                                            key={category.name}
                                            className='flex'>
                                            {({ open, close }) => (
                                                <>
                                                    <div className='relative flex'>
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? 'text-red-600'
                                                                    : 'text-neutral-200 hover:text-neutral-100',
                                                                'relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium'
                                                            )}>
                                                            {category.name}
                                                            <span
                                                                className={classNames(
                                                                    open
                                                                        ? 'bg-red-600'
                                                                        : '',
                                                                    'absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px'
                                                                )}
                                                                aria-hidden='true'
                                                            />
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter='transition ease-out duration-200'
                                                        enterFrom='opacity-0'
                                                        enterTo='opacity-100'
                                                        leave='transition ease-in duration-150'
                                                        leaveFrom='opacity-100'
                                                        leaveTo='opacity-0'>
                                                        <Popover.Panel className='absolute inset-x-0 top-full'>
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div
                                                                className='absolute inset-0 shadow bg-neutral-800 top-1/2'
                                                                aria-hidden='true'
                                                            />

                                                            <div className='relative bg-neutral-800'>
                                                                <div className='px-8 mx-auto max-w-7xl'>
                                                                    <div className='grid grid-cols-2 py-16 gap-y-10 gap-x-8'>
                                                                        <div className='grid grid-cols-2 grid-rows-1 gap-8 text-sm'>
                                                                            {category.featured.map(
                                                                                (
                                                                                    item,
                                                                                    itemIdx
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            item.name
                                                                                        }
                                                                                        className={classNames(
                                                                                            category
                                                                                                .featured
                                                                                                .length %
                                                                                                2 ===
                                                                                                1 &&
                                                                                                itemIdx ===
                                                                                                    0
                                                                                                ? 'col-span-2 aspect-w-2'
                                                                                                : '',
                                                                                            'group relative aspect-w-1 aspect-h-1 rounded-md bg-neutral-100 overflow-hidden'
                                                                                        )}>
                                                                                        <img
                                                                                            src={
                                                                                                item.imageSrc
                                                                                            }
                                                                                            alt={
                                                                                                item.imageAlt
                                                                                            }
                                                                                            className='object-cover object-center group-hover:opacity-75'
                                                                                        />
                                                                                        <div className='flex flex-col justify-end'>
                                                                                            <div className='p-4 text-sm bg-white bg-opacity-60'>
                                                                                                <Link
                                                                                                    href={
                                                                                                        item.href
                                                                                                    }>
                                                                                                    <a
                                                                                                        className='font-medium text-neutral-900'
                                                                                                        onClick={() =>
                                                                                                            close()
                                                                                                        }>
                                                                                                        <span
                                                                                                            className='absolute inset-0'
                                                                                                            aria-hidden='true'
                                                                                                        />
                                                                                                        {
                                                                                                            item.name
                                                                                                        }
                                                                                                    </a>
                                                                                                </Link>
                                                                                                <p
                                                                                                    aria-hidden='true'
                                                                                                    className='mt-0.5 text-neutral-600 sm:mt-1'>
                                                                                                    Shop
                                                                                                    now
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                        <div className='grid grid-cols-3 text-sm text-neutral-400 gap-y-10 gap-x-8'>
                                                                            {category.sections.map(
                                                                                (
                                                                                    column,
                                                                                    columnIdx
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            columnIdx
                                                                                        }
                                                                                        className='space-y-10'>
                                                                                        {column.map(
                                                                                            (
                                                                                                section
                                                                                            ) => (
                                                                                                <div
                                                                                                    key={
                                                                                                        section.name
                                                                                                    }>
                                                                                                    <p
                                                                                                        id={`${category.id}-${section.id}-heading`}
                                                                                                        className='font-medium text-neutral-200'>
                                                                                                        {
                                                                                                            section.name
                                                                                                        }
                                                                                                    </p>
                                                                                                    <ul
                                                                                                        role='list'
                                                                                                        aria-labelledby={`${category.id}-${section.id}-heading`}
                                                                                                        className='mt-4 space-y-4'>
                                                                                                        {section.items.map(
                                                                                                            (
                                                                                                                item
                                                                                                            ) => (
                                                                                                                <li
                                                                                                                    key={
                                                                                                                        item.name
                                                                                                                    }
                                                                                                                    className='flex'>
                                                                                                                    <Link
                                                                                                                        href={
                                                                                                                            item.href
                                                                                                                        }>
                                                                                                                        <a
                                                                                                                            className='hover:text-neutral-100'
                                                                                                                            onClick={() =>
                                                                                                                                close()
                                                                                                                            }>
                                                                                                                            {
                                                                                                                                item.name
                                                                                                                            }
                                                                                                                        </a>
                                                                                                                    </Link>
                                                                                                                </li>
                                                                                                            )
                                                                                                        )}
                                                                                                    </ul>
                                                                                                </div>
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className='flex items-center text-sm font-medium text-neutral-200 hover:text-neutral-100'>
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Group>

                            {/* Logo */}
                            <Link href='/'>
                                <div className='relative flex hover:cursor-pointer'>
                                    <span className='sr-only'>
                                        Diablo Guitars
                                    </span>
                                    <img
                                        className='relative w-auto rounded-full h-28 -bottom-8'
                                        src='/assets/main-logo-ring.png'
                                        alt=''
                                    />
                                </div>
                            </Link>

                            <div className='flex items-center justify-end flex-1'>
                                <a className='hidden text-neutral-200 hover:text-neutral-100 lg:flex lg:items-center'>
                                    <img
                                        src='https://tailwindui.com/img/flags/flag-united-states.svg'
                                        alt=''
                                        className='flex-shrink-0 block w-5 h-auto'
                                    />
                                    <span className='block ml-3 text-sm font-medium'>
                                        USD
                                    </span>
                                    <span className='sr-only'>
                                        , change currency
                                    </span>
                                </a>

                                {/* Search */}
                                {/* <a
                                    href='#'
                                    className='hidden p-2 ml-6 text-neutral-400 hover:text-neutral-500 lg:block'>
                                    <span className='sr-only'>Search</span>
                                    <SearchIcon
                                        className='w-6 h-6'
                                        aria-hidden='true'
                                    />
                                </a> */}

                                {/* Account */}
                                {/* <a
                                    href='#'
                                    className='p-2 text-neutral-400 hover:text-neutral-500 lg:ml-4'>
                                    <span className='sr-only'>Account</span>
                                    <UserIcon
                                        className='w-6 h-6'
                                        aria-hidden='true'
                                    />
                                </a> */}

                                {/* Cart */}
                                <div className='flow-root ml-4 lg:ml-6'>
                                    <a
                                        onClick={openCart}
                                        className='flex items-center p-2 -m-2 group'>
                                        <ShoppingCartIcon
                                            className='flex-shrink-0 w-6 h-6 text-neutral-400 group-hover:text-neutral-500'
                                            aria-hidden='true'
                                        />
                                        <span className='ml-2 text-sm font-medium text-neutral-200 group-hover:text-neutral-100'>
                                            {cartCount}
                                        </span>
                                        <span className='sr-only'>
                                            items in cart, view bag
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
