<script>
  export let y;
  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About Me", link: "#about" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid" +
    (y > 0
      ? " pt-5 pb-3 bg-slate-950 border-violet-950"
      : " py-6 bg-transparent border-transparent")}
>
  <div class="flex">
    <img
      src="https://res.cloudinary.com/dq5zlflvg/image/upload/v1701148862/kamaqen-cartoon_yvcpka.png"
      alt="Jorge Capcha's logo"
      class="max-h-[3vh] mx-2 mr-1"
      id="logo"
    />
  </div>
  <h1 class="font-medium">
    <b class="font-bold robomono">Jorge</b> Capcha
  </h1>
  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:text-violet-400"
        ><p>{tab.name}</p></a
      >
    {/each}
  </div>

  <a
    href="mailto:jmcapcha@gmail.com"
    class="blueShadow relative overflow-hidden px-4 py-2 group rounded-full bg-white text-slate-950"
  >
    <div
      class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
    />
    <h4 class="relative z-9">Get In Touch</h4>
  </a>
  <div class="absolute top-1 flex right-0.5 gap-1">
    <a href="/"
      ><img src="/icons/uk.svg" alt="English" class="relative z-9 w-4 h-4" /></a
    >
    <a href="/es"
      ><img
        src="/icons/spain.svg"
        alt="Español"
        class="relative z-9 w-4 h-4"
      /></a
    >
  </div>
</header>
