import Logo from 'components/icons/Logo';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 bg-white">
      <div className="border-t border-slate-900/5 py-10">
        <div className='flex justify-center'>
          <Logo fill="black"/>
          <h1 className='text-slate-500 ml-2 text-2xl font-medium'>Core Kit</h1>
        </div>
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2023 Core Kit. All rights reserved.
        </p>
        <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/">Home</a>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <a href="/changelog">Github</a>
        </div>
      </div>
    </footer>
  );
}
