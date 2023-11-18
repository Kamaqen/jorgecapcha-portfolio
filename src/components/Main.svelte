<script>
  import Step from "./Step.svelte";
  let steps = [
    { name: "Get That Home", icon: "fa-solid fa-house-laptop" },
    { name: "Todos With Vite", icon: "fa-solid fa-list-check" },
    { name: "Eatable", icon: "fa-solid fa-drumstick-bite" },
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
        Hi! I'm <span class="robomono text-violet-400">Jorge</span> Capcha
        <br />Full Stack <span class="robomono text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">favorite tech</span> includes JavaScript
        or Typescript (Angular or SvelteKit), TailwindCSS, Ruby on Rails, Go or Typescript
        + Nest.js & PostgreSQL!
      </p>
      <a
        href="https://www.linkedin.com/in/jorgecapcha/"
        target="_blank"
        class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl robomono relative overflow-hidden px-6 py-3 rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get In Touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src="/images/portfolio.jpg"
        alt="profile"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="robomono text-violet-400">see</span> my work?
      </h3>
    </div>
    <a
      href="https://res.cloudinary.com/dq5zlflvg/video/upload/v1699302134/Reel_antiguo_Big_Times_ME_rdefv4.mp4"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch The Video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]} />
      <Step step={steps[1]} />
      <Step step={steps[2]} />
    </div>
  </section>
</main>
