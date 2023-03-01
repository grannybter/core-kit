import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, CreditCardIcon, TableCellsIcon, CubeTransparentIcon, BellAlertIcon, UserPlusIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Your feature title',
    description:
      'Charge your customers on a recurring basis for your services or products.',
    icon: CreditCardIcon,
  },
  {
    name: 'Your feature title',
    description:
      'Create lightning-fast web applications with ease by combining the power of the Next.js framework with the customizable components of Tailwind UI.',
    icon: LockClosedIcon,
  },
  {
    name: 'Your feature title',
    description:
      'Speed up your development process by accessing pre-built components.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Your feature title',
    description:
      'Use Supabase Database to create a high-performance backend that can handle large amounts of data.',
    icon: TableCellsIcon,
  },
  {
    name: 'Your feature title',
    description:
      'Implement secure access controls on your website, so only authorized users can access certain areas or features.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Your feature title',
    description:
      'Make sign-up easy for your users by allowing them to use their social media accounts to register for your website.',
    icon: UserPlusIcon,
  },
  {
    name: 'Your feature title',
    description:
      'Keep your users in the loop by sending them email notifications about important updates or events.',
    icon: BellAlertIcon,
  },
  {
    name: 'Your feature title',
    description:
      'Automatically sync pricing plans and subscription statuses via Stripe webhooks.',
    icon: ArrowPathIcon,
  },
]

export default function Features2() {
  return (
    <div className="bg-mainwhite py-24 sm:py-32" id='features'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-azul">Your subtitle here</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your title here
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste eligendi aspernatur itaque sit recusandae similique eius ea nemo facilis neque, ipsa enim eum voluptatem?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-azul">
                    <feature.icon className='h-6 w-6 text-white' aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
