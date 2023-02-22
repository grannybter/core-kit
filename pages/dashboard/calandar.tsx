import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import Calandar from '@/components/ui/Calandar';

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });

export default function Calendar() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Calandar
            </h1>
          </div>
        </header>
        <main className="bg-white">
          <Calandar />
        </main>
      </div>
    </>
  );
}
