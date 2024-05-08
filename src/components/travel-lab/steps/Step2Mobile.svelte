<script lang="ts">
  import Circle from "@components/atoms/Circle.svelte";
  import StepLayout from "../StepLayout.svelte";
  import specialOffers from "@assets/images/casa-tua.png";
  import ultraLuxe from "@assets/images/652-40.png";
  import contemporary from "@assets/images/you1.png";
  import caribbean from "@assets/images/chanticleer 1.png";
  import friends from "@assets/images/casa-tua 1.png";
  import honeyMoon from "@assets/images/Mask group.png";
  import beach from "@assets/images/chambre-2.png";
  import Progress from '@components/travel-lab/Progerss.svelte';

  const collections = [
    {
      id: 2,
      title: "Ultra luxe",
      desc: "The excellence of the villas on the island are here",
      img: ultraLuxe,
      active: false,
    },
    {
      id: 3,
      title: "Contemporary",
      desc: "L’excellence des villas sur l’île sont ici",
      img: contemporary,
      active: false,
    },
    {
      id: 4,
      title: "Caribbean",
      desc: "Envie de vous plongez dans l’ambiance créole ?",
      img: caribbean,
      active: false,
    },
    {
      id: 5,
      title: "Family and friends",
      desc: "Perfect accommodations to share memories",
      img: friends,
      active: false,
    },
    {
      id: 6,
      title: "Honey Moon",
      desc: "For those who needs to feel the romantic vibe",
      img: honeyMoon,
      active: false,
    },
    {
      id: 7,
      title: "On the beach",
      desc: "Only few steps from the beach",
      img: beach,
      active: false,
    },
  ];

  const selectCollection = (id: number) => {
    collections.forEach((collection, index) => {
      collection.id === id
        ? (collections[index]["active"] = true)
        : (collections[index]["active"] = false);
    });
  };
</script>

<div class="flex flex-col">
  <div class="flex flex-col justify-center text-center pt-20">
    <div class="h-[120px] relative flex justify-center items-end">
      <div class="absolute w-full h-full dashed-vertical -z-10 -top-1/2"></div>
      <Circle class="!w-[72px] !h-[72px] wide" light selected />
    </div>
    <span class="text-[35px] pb-12 font-bold text-white pt-6"> STEP 2 </span>
    <span class="text-[25px] font-amsterdam pb-10 text-purple-light">
      The collection
    </span>

    <p class="pb-6 text-white px-10">
      In order to adapt our offer as best as we can, we give you full control
      over what you want during your stay.
    </p>
    <p class="text-[9px] md:text-xs px-10 text-white">
      Offers cannot be combined with our welcome offer
    </p>
  </div>
</div>

<div class="pt-20">
  <div class="flex overflow-scroll hide-scrollbar gap-4 items-start px-10">
    {#each collections.slice(1, collections.length) as collection}
      <div class="flex w-full flex-col min-w-[300px]">
        <img
          src={collection.img}
          class="w-full h-full object-contain"
          alt=""
        />
        <div class="flex w-full gap-4">
          <button
            on:click={() => selectCollection(collection.id)}
            class="flex w-fit"
          >
            <Circle selected={collection.active} class="" light></Circle>
          </button>
          <div class="flex w-full flex-col">
            <p class="text-white text-[20px]">
              {collection.title}
            </p>
            <span class="text-white">
              {collection.desc}
            </span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="h-[70px] relative flex justify-center items-end mt-8">
  <div class="absolute w-full h-full dashed-vertical -z-10 top-0"></div>
</div>
<Progress />