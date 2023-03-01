import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import React, { useRef } from 'react';

const features = [
  {
    name: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis molestias est doloribus quas!',
    icon: LockClosedIcon,
  },
  {
    name: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis molestias est doloribus quas!',
    icon: ServerIcon,
  },
  {
    name: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis molestias est doloribus quas!',
    icon: CloudArrowUpIcon,
  },
]

export default function Features() {

  const sectionRef = useRef(null);

  return (
    <div className="overflow-hidden bg-mainwhite py-24 sm:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-azul">Your subtitle here</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your title here</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio, enim, est perferendis quaerat delectus ab soluta aliquid culpa, accusantium natus ipsa.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-azul" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://i.ibb.co/vdNqFwf/brah-2432x1442.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
