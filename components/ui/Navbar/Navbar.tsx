import { Fragment } from 'react';
import s from './Navbar.module.css';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ArchiveBoxIcon,
  ClipboardDocumentIcon,
  WrenchScrewdriverIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import Logo from 'components/icons/Logo';
import Arrow from 'components/icons/Arrow';

import { animateScroll as scroll, Link as L } from 'react-scroll';

import { useUser } from 'utils/useUser';
import { useRouter } from 'next/router';


function classNames(
  ...classes: Array<string | undefined | null | false | 0>
): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { user } = useUser();
  const router = useRouter();

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
                if (router.pathname !== '/') {
                  router.push('/#features');
                }
              }}
            >
              Features
            </L>

            <a
              href="https://github.com/grannybter/core-kit/blob/main/Setup.md"
              className="text-base font-medium text-mainblack hover:text-mainblack/70"
            >
              Docs
            </a>

            <a
              href="https://github.com/grannybter/core-kit#faq"
              className="text-base font-medium text-mainblack hover:text-mainblack/70"
            >
              FAQ
            </a>
          </Popover.Group>
          <div className="hidden md:flex flex-1 justify-end space-x-8 ">
            <a
              href="https://github.com/grannybter/core-kit"
              target="_blank"
              className="bg-slate-200 hover:bg-slate-300/50 relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1 group hidden lg:flex"
            >
              <div className="text-brand-800 flex h-4 w-4 items-center justify-center">
                <div className="text-scale-900 text-black flex h-8 w-8 items-center justify-center transition-all group-hover:h-12 group-hover:w-12 group-hover:text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="sbui-icon "
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <span className="text-mainblack text-base font-semibold">Star us on GitHub</span>
            </a>

          </div>
        </div>
      </div>
    </Popover>
  );
}
