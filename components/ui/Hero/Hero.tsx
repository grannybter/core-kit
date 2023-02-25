import Link from 'next/link';
import Arrow from 'components/icons/Arrow';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import s from './Hero.module.css';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='isolate bg-mainwhite'>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Simplify Your SaaS Development with Core Kit
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get your SaaS app up and running in no time with the ultimate SaaS
                boilerplate. Streamline development and focus on building your app instead of working on tedious standard features.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/dashboard">
                  <a className="group inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 font-semibold text-white transition hover:bg-slate-700">
                    Try it out
                    <Arrow />
                  </a>
                </Link>

                <Link href="https://github.com/spazick/core-kit">
                  <a className="group inline-flex items-center rounded-full bg-transparent px-4 py-1.5 font-semibold text-slate-700 transition hover:bg-gray-100">
                    Get Code
                    <Arrow stroke="black"/>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
