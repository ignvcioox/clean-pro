import { Card, CardContent, Badge } from '@/modules/shared/components/ui';
import { FEATURES_DATA } from '@/modules/shop/constants/features.data';

export const Features = () => {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <Badge
          variant="secondary"
          className="mb-4 rounded-full px-4 py-1 font-medium"
        >
          ¿Por qué elegir Clean Pro?
        </Badge>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Detailing Automotriz de Alto Nivel
        </h2>
        <p className="text-muted-foreground text-pretty">
          Descubre por qué cientos de clientes confían en nosotros para el
          cuidado de su vehículo. Calidad, asesoría y resultados profesionales
          en cada producto.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {FEATURES_DATA.map(({ title, description, icon: Icon }, index) => (
          <article key={index} className="group">
            <Card className="relative h-full overflow-hidden transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center px-6 text-center">
                <Badge
                  variant="secondary"
                  className="mb-4 inline-flex size-12 items-center justify-center"
                >
                  <Icon className="size-5!" />
                </Badge>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {description}
                </p>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
};
