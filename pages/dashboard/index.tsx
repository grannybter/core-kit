import { withPageAuth } from '@supabase/auth-helpers-nextjs';

import DummyLineChart from '@/components/ui/Charts/LineChart';
import DummyPieChart from '@/components/ui/Charts/PieChart/PieChart';
import DummyBarChart from '@/components/ui/Charts/BarChart/BarChart';
import DummyRadarChart from '@/components/ui/Charts/RadarChart/RadarChart';

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main className='bg-white'>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <DummyLineChart/>
          <DummyRadarChart/>
          <DummyBarChart/>
          <DummyPieChart/>
          </div>
        </main>
      </div>
    </>
  )
}
