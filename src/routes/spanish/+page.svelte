<script lang="ts">
  import { seo } from '$lib/stores/Seo';
  import Seo from '../SEO.svelte';

  seo.set({
    title: 'CN - Spanish',
    description: 'Christian Neighbors - Spanish',
  });
</script>

<Seo title={$seo.title} description={$seo.description} />
<section class="spanish center component pt-8" data-testid="spanish">
  <h1 class="h1-primary mb-8">Asistencia de depensa de alimentos</h1>
  <p class="p-primary">
    Los clientes pueden comprar en la despensa de alimentos una vez por mes calendario y recibirán
    alimentos para aproximadamente 5 días para toda la familia. Cuando estén disponibles, también
    puede seleccionar pañales, artículos de limpieza, productos de higiene personal, suministros de
    papel y medicamentos de venta libre.
  </p>
  <ul class="mx-auto my-6">
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      No se require identificacion para obtener comida
    </li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      Debe vivir en el distrito escolar de Plainwell u Otsego
    </li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">Sin requisitos de ingresos</li>
  </ul>
  <h2 class="h2-primary my-6">Horarios para la despensa de alimentos:</h2>
  <div class="mb-4 flex flex-col gap-3">
    <div>
      <h3 class="h2-primary">Lunes</h3>
      <p class="p-primary">10am-12pm and 4pm-6pm</p>
      <p class="p-primary">
        El lunes es comida para llevar. Recibirá una caja de comida preenvasada.
      </p>
    </div>
    <div>
      <h3 class="h2-primary">Martes</h3>
      <p class="p-primary">10am-12pm</p>
      <p class="p-primary">
        El martes es compras presenciales. Podrás seleccionar tus propios alimentos.
      </p>
    </div>
    <div>
      <h3 class="h2-primary">Miércoles</h3>
      <p class="p-primary">Cerrado</p>
    </div>
    <div>
      <h3 class="h2-primary">Jueves</h3>
      <p class="p-primary">2pm-5pm</p>
      <p class="p-primary">
        El Jueves es compras presenciales. Podrás seleccionar tus propios alimentos
      </p>
    </div>
    <div>
      <h3 class="h2-primary">Viernes</h3>
      <p class="p-primary">Cerrado</p>
    </div>
  </div>
  <p class="p-primary">
    CerradoPara obtener más detalles o si busca asistencia alimentaria, comuníquese con
    <a class="underline" href="mailto:avanputten@christianneighbors.org">Amy VanPutten</a>
    o llamar
    <a href="tel:+12696854166" class="mb-2">(269)685-4166 ext 103</a>.
  </p>
</section>

<section
  class="spanish-financial center component bg-surface-500/60"
  data-testid="spanish-financial"
>
  <h1 class="h1-primary mb-8">Asistencia financiera de emergencia</h1>
  <p class="p-primary">
    Ayudamos financieramente con necesidades críticas de emergencia, como servicios públicos,
    alquiler y recetas.
  </p>
  <ul class="mx-auto my-6">
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      Se requiere identificación para recibir asistencia financiera
    </li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      Debe vivir en el distrito escolar de Otsego, Plainwell o Martin.
    </li>
    <li class="p-primary mx-2 my-1 list-disc text-left sm:mx-auto">
      Existen pautas de ingresos y es posible que deba mostrar prueba de ingresos para recibir
      asistencia financiera.
    </li>
  </ul>
  <p class="p-primary">
    Vendrá a nuestras oficinas y hablará con un administrador de casos quien le hará algunas
    preguntas sobre cuántas personas hay en su familia, cuánto dinero gana y cuáles son sus gastos
    actuales. Se le preguntará sobre cualquier circunstancia especial por la que esté pasando.
    Hablaremos con usted sobre las cosas que ya ha intentado hacer para ayudarse a sí mismo y
    averiguaremos qué ayuda podría estar recibiendo de otras fuentes.
  </p>
  <h2 class="h2-primary my-6">Horarios de asistencia financiera:</h2>
  <div class="mb-4 flex flex-col gap-3">
    <div>
      <h3 class="h2-primary">Martes</h3>
      <p class="p-primary">10am-12pm</p>
    </div>
    <div>
      <h3 class="h2-primary">Jueves</h3>
      <p class="p-primary">2pm-5pm</p>
    </div>
  </div>
  <p class="p-primary">
    Si tiene alguna pregunta, comuníquese con
    <a class="underline" href="mailto:szabaldo@christianneighbors.org">Shannon Zabaldo</a>
    o llamar
    <a href="tel:+12696854166" class="mb-2">(269)685-4166 ext 106</a>.
  </p>
</section>

<section class="spanish-video center component" data-testid="spanish-video">
  <h1 class="h1-primary mb-8">Bienvenidos a Christian Neighbors</h1>
  <div class="flex justify-center">
    <div class="my-6 h-fit w-[600px] rounded-lg border-2 border-white object-cover xl:my-0">
      <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          title="spanish welcome video"
          src="https://player.vimeo.com/video/1024438228?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</section>
