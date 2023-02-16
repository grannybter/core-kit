import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

interface Props {
    userImageUrl: string;
}

function classNames(...classes: Array<string | undefined | null | false | 0>): string {
    return classes.filter(Boolean).join(' ');
}

export default function Dropdown({userImageUrl}: Props) {

    const router = useRouter();
    const supabaseClient = useSupabaseClient();

    const userNavigation = [
        { name: 'Account settings' , onclick: () => router.push('/account')},
        { name: 'Dashboard', onclick: () => router.push('/dashboard') },
        {
            name: 'Sign out', onclick: async () => {
                await supabaseClient.auth.signOut();
                router.push('/signin');
            }
        },
    ]

    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={userImageUrl} alt="" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <a
                                    onClick={item.onclick}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    {item.name}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

