import 'styles/main.css';
import 'styles/chrome-bug.css';
import { useEffect, useState } from 'react';
import React from 'react';

import Layout from 'components/Layout';
import DashboardLayout from 'components/DashboardLayout';

import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
import type { Database } from 'types_db';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  //dashboard defualt layout
  
  if (router.pathname === `/dashboard/signin`) {
    return (
      <div className="bg-black">
        <SessionContextProvider supabaseClient={supabaseClient}>
          <MyUserContextProvider>
              <Component {...pageProps} />
          </MyUserContextProvider>
        </SessionContextProvider>
      </div>
    );
  }
  else if (router.pathname.includes(`/dashboard`)) {
    return (
      <div className="bg-black">
        <SessionContextProvider supabaseClient={supabaseClient}>
          <MyUserContextProvider>
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          </MyUserContextProvider>
        </SessionContextProvider>
      </div>
    );
  }
  //landing page default layout
  else {
    return (
      <div className="bg-black">
        <SessionContextProvider supabaseClient={supabaseClient}>
          <MyUserContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MyUserContextProvider>
        </SessionContextProvider>
      </div>
    );
  }



}
