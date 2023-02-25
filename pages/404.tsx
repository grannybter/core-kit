import Link from 'next/link'
import Arrow from 'components/icons/Arrow'

export default function Four0Four() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-azul">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/dashboard">
                  <a className="group inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 font-semibold text-white transition hover:bg-slate-700">
                    Go back home
                    <Arrow />
                  </a>
                </Link>

                <Link href="/dashboard">
                  <a className="group inline-flex items-center rounded-full bg-transparent px-4 py-1.5 font-semibold text-slate-700 transition hover:bg-gray-100">
                    Contact support
                    <Arrow stroke="black"/>
                  </a>
                </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  