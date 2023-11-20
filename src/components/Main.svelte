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
      href: "https://res.cloudinary.com/dq5zlflvg/image/upload/v1700439523/doable_duedate.png",
    },
    {
      name: "Eatable",
      icon: "fa-solid fa-drumstick-bite",
      href: "https://res.cloudinary.com/dq5zlflvg/image/upload/v1700440263/eatable_dashboard.png",
    },
  ];
  let benefits = [
    {
      name: "Tech Enthusiast",
      description:
        "As a Full Stack Developer, I'm on a perpetual journey of learning and exploration. From mastering frameworks to crafting seamless user experiences, I'm always up for a challenge. Embracing the flexibility of remote work, I bring my leadership experience to collaborative projects. Together, let's build something amazing, no matter where in the world you are.",
    },
    {
      name: "Excellent Communicator",
      description:
        "Beyond the lines of code, I'm also a medical interpreter. I don't just speak languages; I craft seamless communication bridges. My ability to break down language barriers ensures that ideas flow effortlessly. I thrive on the challenge of conveying not just words, but the nuanced essence behind them, enhancing understanding and collaboration in both the tech world and beyond.",
    },
    {
      name: "Harmony Seeker",
      description:
        "In the world of bits and bytes, I find balance in music. Whether I'm fine-tuning a melody or debugging a complex algorithm, the precision and creativity required in both domains are remarkably similar. This harmony-seeking mindset extends beyond the notes and lines of code, influencing my approach to problem-solving and fostering a balanced perspective in the dynamic world of technology.",
    },
    {
      name: "Innovative Soul",
      description:
        "Fueled by a passion for pushing boundaries, I'm diving into cutting-edge technologies with a focus on blockchain. Specifically, I'm exploring the decentralized future, delving into smart contracts using languages like Solidity. Simultaneously, I'm deeply engaged in understanding wallet authentication mechanisms, recognizing their pivotal role in securing transactions on the blockchain.",
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
        Hi! I'm <span class="robomono text-violet-400">Jorge</span> Capcha
        <br />Full Stack <span class="robomono text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">favorite tech</span> includes JavaScript
        or Typescript (Angular or SvelteKit), TailwindCSS, Ruby on Rails, Go or Typescript
        + Nest.js & PostgreSQL!
      </p>
      <a
        href="mailto:jmcapcha@gmail.com"
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl robomono relative overflow-hidden px-6 py-3 rounded-full bg-white text-slate-950"
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
        id="profile"
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
      <Step step={steps[0]}>
        <p>
          Get That Home is a comprehensive full-stack application designed to
          connect home seekers with property owners. With advanced search
          features and options to save or post properties, this project was
          developed using <strong class="text-violet-400"
            >Ruby on Rails, React and JavaScript!</strong
          > Rails is used to build the REST API and React JS is used for the project's
          frontend.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Doable is a versatile to-do list application designed to streamline
          users' lives by efficiently managing essential tasks information. The
          project was developed using <strong class="text-violet-400"
            >HTML, CSS, and vanilla JavaScript</strong
          > , with data sourced from an external API.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Eatable is a web application that empowers users to browse, update,
          and delete various food records effortlessly. This dynamic platform
          was constructed using <strong class="text-violet-400"
            >Emotion CSS, JavaScript, and React</strong
          >, and it seamlessly interacts with a data API.
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
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="robomono text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="ms-auto robomono font-semibold text-lg sm:text-xl md:text-2xl">
      I am...
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
      The <span class="text-violet-400 robomono">Complete</span> Package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class="border-b border-solid border-slate-200">
          <tr class="">
            <th />
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8"
              >Me</th
            >
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
              >Dedication</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
              >Critical Thought</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
              >Interpersonal Skills</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
              >Programming Ability</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto">so why not invest?</p>
  </section>
</main>
