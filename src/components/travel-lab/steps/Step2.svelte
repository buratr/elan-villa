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

  const collections = [
    {
      id: 1,
      title: "Special offers",
      desc: "Perfect accommodations to share memories",
      img: specialOffers,
      active: false
    },
    {
      id: 2,
      title: "Luxury",
      desc: "The excellence of the villas on the island are here",
      img: ultraLuxe,
      active: false
    },
    {
      id: 3,
      title: "Contemporary",
      desc: "L’excellence des villas sur l’île sont ici",
      img: contemporary,
      active: false
    },
    {
      id: 4,
      title: "Caribbean",
      desc: "Envie de vous plongez dans l’ambiance créole ?",
      img: caribbean,
      active: false
    },
    {
      id: 5,
      title: "Family and friends",
      desc: "Perfect accommodations to share memories",
      img: friends,
      active: false
    },
    {
      id: 6,
      title: "Honey Moon",
      desc: "For those who needs to feel the romantic vibe",
      img: honeyMoon,
      active: false
    },
    {
      id: 7,
      title: "On the beach",
      desc: "Only few steps from the beach",
      img: beach,
      active: false
    },
    {
      id: 8,
      title: "On the cliff",
      desc: "Only few steps from the beach",
      img: beach,
      active: false
    },
    {
      id: 9,
      title: "On the hills",
      desc: "Only few steps from the beach",
      img: beach,
      active: false
    },
  ];

  const selectCollection = (id: number) => {
    collections[id-1]['active'] = !collections[id-1]['active']
    collections.forEach((collection, index) => {
      //collection.id === id ? collections[index]['active'] = true : collections[index]['active'] = false;
    });
  }

</script>

<StepLayout>
  <div
    slot="right"
    class="px-10 md:p-0 flex text-xs md:text-base flex-col text-white"
  >
    <div class="flex flex-col max-w-md pb-40">
      <span class="text-[20px] md:text-[35px] pb-12 font-bold text-white">
        STEP 2
      </span>
      <span class="md:text-[35px] font-amsterdam pb-20 text-purple-light">
        The collection
      </span>

      <p class="pb-6">
        In order to adapt our offer as best as we can, we give you full control
        over what you want during your stay.
      </p>
      <p class="text-[9px] md:text-xs">
        Offers cannot be combined with our welcome offer
      </p>
    </div>
  </div>
  <div slot="icon" class="flex justify-center">
    <Circle class="!w-[72px] !h-[72px] wide" light selected />
  </div>
  <div slot="left">
    <div class="pl-[10%] pb-20">
      <div class="flex w-full flex-col pb-4">
        <img
          src={collections[0].img}
          class="w-full h-full object-contain"
          alt=""
        />
        <div class="flex w-full gap-4">
          <button on:click={() => selectCollection(collections[0].id)} class="flex w-fit">
            <Circle selected={collections[0].active} class="" light></Circle>
          </button>
          <div class="flex w-full flex-col">
            <p class="text-white text-[20px]">
              {collections[0].title}
            </p>
            <span class="text-white">
              {collections[0].desc}
            </span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 items-start">
        {#each collections.slice(1, collections.length) as collection}
          <div class="flex w-full flex-col">
            <img
              src={collection.img}
              class="w-full h-full object-contain"
              alt=""
            />
            <div class="flex w-full gap-4">
              <button
              on:click={() => selectCollection(collection.id)}
               class="flex w-fit">
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
  </div>
</StepLayout>
