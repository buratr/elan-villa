<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import WomanImage from "@assets/images/woman.png";
  import IconCoctail from "@assets/svgs/illustrations/18illustration.svg?component"
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";

  let carousel: HTMLDivElement;

const scrollTo = (direction: 'next' | 'prev') => {
  const itemWidth = carousel.children[0].offsetWidth + 32; // Assuming all items have the same width plus gap 32px

  if (direction === 'next') {
    carousel.scrollLeft += itemWidth;
  } else {
    carousel.scrollLeft -= itemWidth;
  }
};
</script>

<div class="flex flex-col justify-center lg:px-[15%] relative mt-52">
    <IconCoctail class="stroke-purple-light md:w-[596px] w-[320px] absolute md:-top-80 -top-44 z-10 right-0 lg:right-40" />
    <!-- max-lg:flex max-lg:flex-col grid gap-11 items-start grid-cols-2 justify-center relative -->
  <div bind:this={carousel} class=" grid gap-11 items-start grid-cols-2 justify-center relative
  max-lg:flex max-lg:flex-row max-lg:items-stretch max-lg:flex-nowrap hide-scrollbar max-lg:justify-start max-lg:gap-8 max-lg:overflow-x-scroll max-lg:px-8">

    <div class="max-lg:w-96 flex flex-1 blue-bar rounded-[40px] col-span-2 px-8 md:px-16 md:pb-11 pt-20 justify-end relative 
    max-lg:min-w-[410px] max-lg:pb-11
    max-sm:min-w-[85vw]">
      <div class="flex flex-col gap-10 lg:w-2/3">
        <span class="font-athena text-4xl text-white">
          Trusted services providers
        </span>
        <span class="text-white tracking-widest text-justify">
          Our Trusted Services Providers are highly skilled professionals
          dedicated to delivering top-quality services to our clients. All of our
          providers have been carefully vetted to ensure they meet our high
          standards of excellence, and are committed to providing you the best
          possible services. Trust us to take care of your needs, and you'll be in
          good hands all stay long.
        </span>
        <div>
          <Button style="primary">See all</Button>
        </div>
        <!-- md:absolute -->
        <img
          src={WomanImage}
          class=" max-h-96 object-contain object-right w-auto bottom-0 left-8 lg:left-20 lg:absolute lg:block hidden"
          alt="woman"
        />
      </div>
    </div>
  
    <div class="max-lg:w-96 flex flex-1 flex-col gap-10 purple-bar rounded-[40px] px-8 md:px-16 pb-11 pt-20 
    max-lg:min-w-[410px]
    max-sm:min-w-[85vw]">
      <span class="font-athena text-4xl text-white">
        Saint- Barthélémy Island
      </span>
      <span class="text-white tracking-wide text-justify">
        Saint- Barthélemy, the Caribbean Island known for its french Art de
        Vivre and the luxury lifestyle it has to offer.
      </span>
      <div class="flex justify-between items-end flex-wrap gap-8">
        <span class="text-white">
          <span class="font-semibold">Capital:</span> Gustavia <br />
          <span class="font-semibold">Population:</span> 10 585 (2020) <br />
          <span class="font-semibold">Language:</span> French, English <br />
          <span class="font-semibold">Land Area:</span> 8,1 sqmi <br />
        </span>
        <div class="md:pb-4">
          <Button style="light">Learn More</Button>
        </div>
      </div>
    </div>

    <div class="max-lg:w-96 flex flex-1 gap-10 flex-col dark-bar rounded-[40px] px-8 md:px-16 pb-11 pt-20 md:mt-4 
    max-lg:min-w-[410px]
    max-sm:min-w-[85vw]">
      <span class="font-athena text-4xl text-white">
        Vacation tips
      </span>
      <span class="text-white tracking-wide text-justify">
        The prestigious Caribbean island of St Barts is a privileged holiday
        destination, both chic and relax, to guide you through your stay we put
        our expertise and efficiency at your service. Your memories are our
        priority, that's why we want you to have all the keys in hand to spend
        unforgettable moments In this section you will find everything you could
        possibly need, thanks to Vacation Tips, the island will no longer have
        any secrets for you
      </span>
      <div>
        <Button style="primary">Discover</Button>
      </div>
    </div>
    
  </div>
  

  <!-- <div class="absolute z-10 flex justify-between w-full px-8 lg:hidden -bottom-20">
    <button on:click={() => scrollTo('prev')} class="group">
      <IconArrowLeft
        width="32"
        class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer transition-transform group-hover:scale-105 group-avtive:scale-110"
      />
    </button>
    <button on:click={() => scrollTo('next')} class="group">
      <IconArrowLeft
        width="32"
        class="stroke-purple-secondary !w-auto !h-auto !rotate-180 stroke-9 cursor-pointer transition-transform group-hover:scale-105 group-avtive:scale-110"
      />
    </button>
  </div> -->
  

</div>

<style lang="postcss">
  .blue-bar {
    border-radius: 40px;
    background: radial-gradient(
        61.96% 108.19% at 46.69% -18.87%,
        rgba(134, 134, 218, 0.6) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      #000023;
  }

  .purple-bar {
    border-radius: 40px;
    background: linear-gradient(278deg, #50156b 35.24%, #3e127f 88.52%);
    box-shadow: -5px 7px 14px -8px rgba(0, 0, 0, 0.25);
  }

  .dark-bar {
    border-radius: 40px;
    background: linear-gradient(
        68deg,
        #000 22.61%,
        rgba(0, 0, 0, 0.09) 58.62%,
        rgba(255, 255, 255, 0.06) 91.35%
      ),
      #1e1e1e;
  }
</style>
