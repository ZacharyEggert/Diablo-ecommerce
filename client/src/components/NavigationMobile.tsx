/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

interface IItem {
    name: string;
    href: string;
    description?: string;
}
interface NavigationMobileProps {
    items: IItem[];
}
export default function NavigationMobile(props: NavigationMobileProps) {
    const { items } = props;

    return (
        <Popover className='relative'>
            {({ open }) => (
                <>
                    <Popover.Button
                        className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-none rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500'
                        )}>
                        <MenuIcon
                            className={classNames(
                                open ? 'text-grey-600' : 'text-grey-400',
                                'h-12 w-12 group-hover:text-grey-500'
                            )}
                            aria-hidden='true'
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'>
                        <Popover.Panel className='absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-full left-1/2 sm:px-0'>
                            <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                <div className='relative grid gap-6 px-5 py-6 border-2 border-solid rounded-md bg-grey-900 sm:gap-8 sm:p-8 border-grey-700'>
                                    {items.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className='block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50'>
                                            <p className='text-base font-medium text-grey-300'>
                                                {item.name}
                                            </p>
                                            <p className='mt-1 text-sm text-gray-500'>
                                                {item.description}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
