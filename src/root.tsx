import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        <ServiceWorkerRegister />
      </head>
      <body>
        <main style={{ border: '1px solid red' }}>
          <RouterOutlet />
        </main>
      </body>
    </QwikCityProvider>
  );
});
