import { getServicesPage } from '@/src/lib/services/servicesPage'
import { TypeServiceSkeleton } from '@/src/generated'
import { ServiceType } from '@/src/components/ServiceHero/types'
import ServiceHero from '@/src/components/ServiceHero'

export default async function Page() {
  const servicesPageContent = await getServicesPage()
  const header = servicesPageContent.fields.header as string
  const subHeading = servicesPageContent.fields.subheading as string
  const servicesList = servicesPageContent.fields
    .services as unknown as TypeServiceSkeleton[]
  const services: ServiceType[] = servicesList.map((service) => {
    return {
      serviceName: service.fields.serviceName as unknown as string,
      timeOrDuration: service.fields.timeOrDuration as unknown as string,
      serviceDescription: service.fields
        .serviceDescription as unknown as string,
    }
  })
  return (
    <main>
      <ServiceHero
        header={header}
        subHeading={subHeading}
        services={services}
      />
    </main>
  )
}
