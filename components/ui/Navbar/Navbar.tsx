import { Fragment } from 'react';
import s from './Navbar.module.css';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  ArchiveBoxIcon,
  ClipboardDocumentIcon,
  WrenchScrewdriverIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import Logo from 'components/icons/Logo';
import Arrow from 'components/icons/Arrow';

import { animateScroll as scroll, Link as L } from 'react-scroll';

import { useUser } from 'utils/useUser';
import { useRouter } from 'next/router'

const resources = [
  {
    name: 'Customer Support',
    description: 'Get all of your questions answered in our forums on Github.',
    href: 'https://github.com/spazick/core-kit/issues',
    icon: ClipboardDocumentIcon
  },
  {
    name: 'Setup Guide',
    description: 'Learn how to setup your project.',
    href: 'https://github.com/spazick/core-kit/blob/main/Setup.md',
    icon: WrenchScrewdriverIcon
  },
  {
    name: 'Github Repository',
    description: 'View codebase on Github.',
    href: 'https://github.com/spazick/core-kit',
    icon: ArchiveBoxIcon
  },
  {
    name: 'FAQ',
    description: "Got questions? We've got answers.",
    href: "https://github.com/spazick/core-kit#faq",
    icon: QuestionMarkCircleIcon
  }
];
const recentQuestions = [
  { id: 1, name: 'What is supabase?', href: 'https://github.com/spazick/core-kit#faq' },
  { id: 2, name: 'What stack is this boilerplate built in?', href: 'https://github.com/spazick/core-kit#faq' },
  { id: 3, name: 'Is this free?', href: 'https://github.com/spazick/core-kit#faq' }
];

function classNames(
  ...classes: Array<string | undefined | null | false | 0>
): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { user } = useUser();
  const router = useRouter()

  return (
    <Popover className="relative bg-transparent z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Core Kit</span>
              <Logo fill="#1c1c1c" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-mainwhite p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-azul">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <L
              to="features"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              className="text-base font-medium text-mainblack hover:text-mainblack/70 cursor-pointer"
              onClick={() => {
                if (router.pathname !== "/") {
                  router.push("/#features")
                }
              }}
            >
              Features
            </L>

            <a
              href="/pricing"
              className="text-base font-medium text-mainblack hover:text-mainblack/70"
            >
              Pricing
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-mainblack/70' : 'text-mainblack',
                      'group inline-flex items-center rounded-md bg-transparent text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-azul focus:ring-offset-2'
                    )}
                  >
                    <span>Resources</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-mainwhite px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              target="_blank"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-azul"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">
                              Frequent Questions
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentQuestions.map((post) => (
                                <li
                                  key={post.id}
                                  className="truncate text-base"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                    target="_blank"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="https://github.com/spazick/core-kit#faq"
                              className="font-medium text-azul hover:text-azul/70"
                              target="_blank"
                            >
                              View FAQ
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex flex-1 justify-end space-x-8 ">
            {user ? (
              <a>
                <Link href="/dashboard">
                  <a className="group inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 font-semibold text-white transition hover:bg-slate-700">
                    Dashboard
                    <Arrow />
                  </a>
                </Link>
              </a>
            ) : (
              <Link href="/signin">
                <a className="group inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 font-semibold text-white transition hover:bg-slate-700">
                  Sign in
                  <Arrow />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-mainwhite shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo fill="#1c1c1c" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-mainwhite p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-azul">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <L
                    to="features"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={700}
                    className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                  >
                    Features
                  </L>
                  <a
                    href="/pricing"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                {user ? (
                  <a>
                    <Link href="/dashboard">
                      <a className="group w-full inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700">
                        Dashboard
                        <Arrow />
                      </a>
                    </Link>
                  </a>
                ) : (
                  <Link href="/signin">
                    <a className="group w-full inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700">
                      Sign in
                      <Arrow />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
