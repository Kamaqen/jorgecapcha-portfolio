<script>
  import Step from "./Step.svelte";
  let steps = [
    {
      name: "Get That Home",
      icon: "fa-solid fa-house-laptop",
      href: "https://getthathome-t1.netlify.app",
    },
    {
      name: "Doable",
      icon: "fa-solid fa-list-check",
      href: "https://doable-jc.netlify.app",
    },
    {
      name: "Eatable",
      icon: "fa-solid fa-drumstick-bite",
      href: "https://eatable-jc.netlify.app",
    },
  ];
  let benefits = [
    {
      name: "Entusiasta de la Tecnología",
      description:
        "Como desarrollador Full Stack, estoy en un viaje continuo de aprendizaje y exploración. Desde dominar frameworks hasta crear experiencias de usuario fluidas, siempre estoy listo para un desafío. Aprovechando la flexibilidad del trabajo remoto, aporto mi experiencia en liderazgo a proyectos colaborativos. Juntos, podemos construir algo increíble, sin importar dónde estés en el mundo.",
    },
    {
      name: "Excelente Comunicador",
      description:
        "Más allá de las líneas de código, también soy intérprete médico. No solo hablo idiomas; creo puentes de comunicación efectivos. Mi habilidad para superar barreras lingüísticas asegura que las ideas fluyan sin problemas. Me apasiona transmitir no solo palabras, sino también la esencia detrás de ellas, mejorando la comprensión y colaboración tanto en el mundo tecnológico como más allá.",
    },
    {
      name: "Buscador de Armonía",
      description:
        "En el mundo de los bits y bytes, encuentro equilibrio en la música. Ya sea afinando una melodía o depurando un algoritmo complejo, la precisión y creatividad requeridas en ambos campos son notablemente similares. Esta mentalidad de búsqueda de armonía se extiende más allá de las notas y líneas de código, influyendo en mi enfoque para resolver problemas y fomentando una perspectiva equilibrada en el dinámico mundo de la tecnología.",
    },
    {
      name: "Alma Innovadora",
      description:
        "Impulsado por una pasión por superar límites, estoy explorando tecnologías de vanguardia con un enfoque en blockchain. En particular, estoy investigando el futuro descentralizado, profundizando en contratos inteligentes utilizando lenguajes como Solidity. Al mismo tiempo, estoy profundamente involucrado en comprender los mecanismos de autenticación de billeteras, reconociendo su papel fundamental en la seguridad de las transacciones en blockchain.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        ¡Hola! Soy <span class="robomono text-violet-400">Jorge</span> Capcha
        <br />Desarrollador
        <span class="robomono text-violet-400">Full Stack</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        Mi <span class="text-violet-400">tecnología favorita</span> incluye JavaScript
        o TypeScript (React, Angular o Svelte), Microsoft .NET, C#, Solidity y PostgreSQL.
      </p>
      <div
        class="flex flex-col lg:align-center gap-6 md:gap-8 lg:gap-10 lg:justify-center"
      >
        <div
          class="flex justify-center lg:justify-start gap-6 md:gap-8 lg:gap-10 px-6"
        >
          <a href="mailto:jmcapcha@gmail.com">
            <i class="fa-solid fa-envelope" />
          </a>
          <a href="https://github.com/Kamaqen" target="_blank">
            <i class="fa-brands fa-square-github fa-lg" />
          </a>
          <a href="https://www.linkedin.com/in/jorgecapcha/" target="_blank">
            <i class="fa-brands fa-linkedin fa-lg" />
          </a>
        </div>
        <a
          href="/assets/resume-jorge-capcha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl robomono relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 class="relative z-9">Descargar Currículum</h4>
        </a>
      </div>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src="https://res.cloudinary.com/dq5zlflvg/image/upload/v1701148776/portfolio_v7wrqu.jpg"
        alt="Foto de perfil de Jorge Capcha"
        class="object-cover z-[2] max-h-[70vh]"
        id="profile"
      />
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        Algunos de mis proyectos creativos.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        ¿Tienes <span class="robomono text-violet-400">curiosidad</span> por mi trabajo?
      </h3>
    </div>
    <a
      href="https://res.cloudinary.com/dq5zlflvg/video/upload/v1701131205/JC_fullstack_dev.mp4"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Ver el Video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Get That Home es una aplicación full-stack diseñada para conectar a
          quienes buscan vivienda con propietarios. Con funciones avanzadas de
          búsqueda y opciones para guardar o publicar propiedades, este proyecto
          fue desarrollado utilizando
          <strong class="text-violet-400"
            >Ruby on Rails, React y JavaScript</strong
          >. Rails se usa para construir la API REST y React JS para el
          frontend.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Doable es una aplicación de lista de tareas diseñada para simplificar
          la vida de los usuarios gestionando eficientemente información clave.
          El proyecto fue desarrollado usando
          <strong class="text-violet-400">HTML, CSS y JavaScript puro</strong>,
          obteniendo datos de una API externa.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Eatable es una aplicación web que permite a los usuarios explorar,
          actualizar y eliminar fácilmente diversos registros de alimentos. Este
          dinámico proyecto fue construido utilizando
          <strong class="text-violet-400"
            >Emotion CSS, JavaScript y React</strong
          >, interactuando de manera fluida con una API de datos.
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">¿Quieres saber más?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Un poco <span class="robomono text-violet-400">sobre</span> mí.
      </h3>
    </div>
    <p class="ms-auto robomono font-semibold text-lg sm:text-xl md:text-2xl">
      Soy...
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="robomono text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class="text-2xl sm:text-3xl font-semibold text-center robomono">
      El <span class="text-violet-400 robomono">Paquete</span> Completo
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class="border-b border-solid border-slate-200">
          <tr class="">
            <th />
            <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">
              Yo
            </th>
            <th class="whitespace-nowrap p-2 px-4">Candidato #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidato #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidato #3</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Dedicación
            </td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Pensamiento Crítico
            </td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Habilidades Interpersonales
            </td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Capacidad de Programación
            </td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Desliza para ver más &rarr;</p>
    </div>
    <p class="mx-auto">¿por qué no invertir?</p>
  </section>
</main>
