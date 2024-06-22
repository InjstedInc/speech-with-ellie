import { ServiceType } from '@/src/components/ServiceHero/types'

interface ServiceHeroProps {
  header: string
  subHeading: string
  services: ServiceType[]
}
const ServiceHero: React.FC<ServiceHeroProps> = ({
  header,
  subHeading,
  services,
}) => {
  return (
    <div className='bg-transparent py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {header}
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>{subHeading}</p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {services.map((feature) => (
              <div key={feature.serviceDescription} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-text-primary'>
                  {feature.serviceName}
                </dt>
                <dd>
                  <span className='mt-2 text-sm leading-7 text-text-light'>
                    {feature.timeOrDuration}
                  </span>
                </dd>
                <dd className='mt-2 text-base leading-7 text-text-secondary'>
                  {feature.serviceDescription}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ServiceHero
