import { Truck, ShieldCheck, Headset, Award } from "lucide-react"
import { Card, CardContent } from "../../shared/components/ui"
import { Badge } from "../../shared/components/ui/badge"

interface FeatureItem {
   id: number
   title: string
   description: string
   icon: React.ComponentType<{ className?: string }>
}

const features: FeatureItem[] = [
   {
      id: 1,
      title: 'Envio Rapido',
      description: 'Despacho en 24-48 horas a todo el país',
      icon: Truck,
   },
   {
      id: 2,
      title: 'Garantía',
      description: '100% satisfacción o te devolvemos tu dinero',
      icon: ShieldCheck,
   },
   {
      id: 3,
      title: 'Calidad Premium',
      description: 'Solo las mejores marcas del mercado',
      icon: Award,
   },
   {
      id: 4,
      title: 'Soporte 24/7',
      description: 'Asesoría profesional cuando lo necesites',
      icon: Headset,
   },
]

export const Features = () => {
   return (
      <section className='container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
         <header className='mx-auto mb-12 max-w-2xl text-center'>
            <Badge variant='secondary' className='mb-4 rounded-full px-4 py-1 font-medium'>
               ¿Por qué elegir Clean Pro?
            </Badge>
            <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>Detailing Automotriz de Alto Nivel</h2>
            <p className='text-muted-foreground text-pretty'>
               Descubre por qué cientos de clientes confían en nosotros para el cuidado de su vehículo. Calidad, asesoría y resultados profesionales en cada producto.
            </p>
         </header>

         <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'>
            {features.map(feature => (
               <article key={feature.id} className='group'>
                  <Card className='relative h-full overflow-hidden transition-all hover:shadow-md'>
                     <CardContent className='px-6 flex flex-col items-center text-center'>
                        <Badge variant='secondary' className='mb-4 inline-flex size-12 items-center justify-center'>
                           <feature.icon className='!size-5' aria-hidden='true' />
                        </Badge>
                        <h3 className='mb-2 text-lg font-semibold'>{feature.title}</h3>
                        <p className='text-muted-foreground mb-4 text-sm'>{feature.description}</p>
                     </CardContent>
                  </Card>
               </article>
            ))}
         </div>
      </section>
   )
}
