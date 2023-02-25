import Link from "next/link";
import Arrow from "components/icons/Arrow";

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex justify-center relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#5046e5" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 pb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Accelerate your production time. Start using Core Kit today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get months worth of work done in minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/dashboard">
                <a className="group inline-flex items-center rounded-full bg-white px-4 py-1.5 font-semibold text-slate-700 transition hover:bg-gray-300">
                  Live Demo
                  <Arrow stroke="black"/>
                </a>
              </Link>

              <Link href="https://github.com/spazick/nextjs-subscription-starter">
                <a className="group inline-flex items-center rounded-full bg-transparent px-4 py-1.5 font-semibold text-white transition hover:bg-gray-100 hover:bg-opacity-10">
                  Get Code
                  <Arrow/>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
