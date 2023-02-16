import Link from 'next/link';
import s from './Navbar.module.css';

import Logo from 'components/icons/Logo';
import { useRouter } from 'next/router';
import { useUser } from 'utils/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Arrow from 'components/icons/Arrow';
import Dropdown from '../Dropdown';

const Navbar = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
          </div>
          <nav className="space-x-6 ml-6 flex justify-center">
            <Link href="/#features">
              <a className="text-white font-medium py-2 px-4 rounded">
                Features
              </a>
            </Link>
            <Link href="/pricing">
              <a className="text-white font-medium py-2 px-4 rounded outline-none">
                Pricing
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-white font-medium py-2 px-4 rounded">
                Contact
              </a>
            </Link>
          </nav>

          <div className="flex flex-1 justify-end space-x-8 ">
            {user ? (
              <a
              >
                <Dropdown userImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnjuPl-F7fs_iUbuex_MQ5JN3KR4SMbbY8A&usqp=CAU" />
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
    </nav>
  );
};

export default Navbar;
