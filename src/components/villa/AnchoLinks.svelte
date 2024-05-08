<script lang="ts">
  import LordIcon from "@components/atoms/LordIcon.svelte";

  export let anchorWidth: number;

  function handleAnchorClick(id: string) {
    const anchor = document.getElementById(id);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<div class="flex md:gap-12" bind:clientWidth={anchorWidth}>
  <button
    class="pr-16 md:pr-0 pl-8 md:pl-0 flex flex-col justify-center gap-5 group transition-all items-center min-w-fit"
    on:click={() => handleAnchorClick('gallery')}
  >
    <div class="p-2 md:p-3 bg-white/20 shadow-anchor rounded-full">
      <LordIcon
        name="gallery"
        size="68"
        class="text-black group-hover:text-purple-light hidden md:flex"
      />
      <LordIcon
        name="gallery"
        size="42"
        class="text-black group-hover:text-purple-light md:hidden"
      />
    </div>
    <span
      class="text-nowrap text-xs md:text-sm text-white group-hover:text-purple-light transition-all"
      >Gallery</span
    >
  </button>
  <button
    class="pr-16 md:pr-0 flex flex-col justify-center gap-5 group transition-all items-center min-w-fit"
    on:click={() => handleAnchorClick('plans')}
  >
    <div class="p-3 md:p-4 bg-white/20 shadow-anchor rounded-full">
      <LordIcon
        name="plans"
        size="68"
        class="text-black group-hover:text-purple-light hidden md:flex"
      />
      <LordIcon
        name="plans"
        size="42"
        class="text-black group-hover:text-purple-light md:hidden"
      />
    </div>
    <span
      class="text-nowrap text-xs md:text-sm text-white group-hover:text-purple-light transition-all"
      >Plans & amenities</span
    >
  </button>
  <button
    class="pr-16 md:pr-0 flex flex-col justify-center gap-5 group transition-all items-center min-w-fit"
    on:click={() => handleAnchorClick('surroundings')}
  >
    <div class="p-3 md:p-4 bg-white/20 shadow-anchor rounded-full">
      <LordIcon
        name="surroundings"
        size="68"
        class="text-black group-hover:text-purple-light hidden md:flex"
      />
      <LordIcon
        name="surroundings"
        size="42"
        class="text-black group-hover:text-purple-light md:hidden"
      />
    </div>
    <span
      class="text-nowrap text-xs md:text-sm text-white group-hover:text-purple-light transition-all"
      >Surroundings</span
    >
  </button>
  <button
    class="pr-16 md:pr-0 flex flex-col justify-center gap-5 group transition-all items-center min-w-fit"
    on:click={() => handleAnchorClick('vacation-plans')}
  >
    <div class="p-3 md:p-4 bg-white/20 shadow-anchor rounded-full">
      <LordIcon
        name="vacation-plan"
        size="68"
        class="text-black group-hover:text-purple-light hidden md:flex"
      />
      <LordIcon
        name="vacation-plan"
        size="42"
        class="text-black group-hover:text-purple-light md:hidden"
      />
    </div>
    <span
      class="text-nowrap text-xs md:text-sm text-white group-hover:text-purple-light transition-all"
      >Vacation plan</span
    >
  </button>
  <button
    class="pr-16 md:pr-0 flex flex-col justify-center gap-5 group transition-all items-center min-w-fit"
    on:click={() => handleAnchorClick('contacts')}
  >
    <div class="p-3 md:p-4 bg-white/20 shadow-anchor rounded-full">
      <LordIcon
        name="contacts"
        size="68"
        class="text-black group-hover:text-purple-light hidden md:flex"
      />
      <LordIcon
        name="contacts"
        size="42"
        class="text-black group-hover:text-purple-light md:hidden"
      />
    </div>
    <span
      class="text-nowrap text-xs md:text-sm text-white group-hover:text-purple-light transition-all"
      >Contact</span
    >
  </button>
</div>
