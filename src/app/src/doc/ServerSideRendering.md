## Que es es SSR?

envuelve el renderizado de nuestras paginas en un server.

Cuando realizamos una peticion al backend de nuestra aplicacion en el network no va a aparecer porque ya se renderizo anteriormente lo que mejora la velocidad de carga de la pagina.

## Porque usar SSR?

Mejora del performance

Mejora considerable de las vitals (miden la performance, y estadisticas de nuestra App)

Mejora del SEO

## Crear proyecto ssr

Nuevo proyecto : ng new --ssr

Proyecto existente : ng add @angular/ssr

## Client Hydration

Desde el server se ejecuta la app, esto llega al navegador, este descarga y analiza todo el js y empieza a ejecutarse