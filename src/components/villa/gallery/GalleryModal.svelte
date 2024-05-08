<script lang="ts">
  import { slidy } from "@slidy/core";
  import IconButton from "@components/atoms/IconButton.svelte";
  import CloseIcon from "@assets/svgs/icons/cross-svgrepo-com.svg?component";
  import { modal } from "@components/Modal.svelte";
  export let galleryData: any;

  const rooms = galleryData.map((room: any) => room.name.toLowerCase());

  export let activeRoom = galleryData[1].name;

  function selectRoom(name: string) {
    activeRoom = name.toLocaleLowerCase();
    index = 0;
    reload();
  }

  let gap = 0,
    index = 0,
    position = 0,
    page = Math.trunc(Math.random() * 10),
    wrap;

  $: width = "100%";

  $: activeRoomData = galleryData.find(
    (room: any) => room.name.toLowerCase() === activeRoom.toLowerCase()
  );

  function reload() {
    page = Math.trunc(Math.random() * 10);
  }

  function onMove(e: any) {
    index = e.detail.index;
    position = e.detail.position;
  }
</script>

<div class="flex h-screen w-screen">
  <div
    class="flex flex-col absolute bg-white/80 backdrop-blur-xl h-screen w-fit z-50 items-start overflow-scroll"
  >
    <div class="flex gap-4 items-center px-14 py-10">
      <IconButton
        dark
        class="!p-0"
        on:click={() => {
          modal.close();
        }}
      >
        <CloseIcon
          width="24"
          height="24"
          class="stroke-6 stroke-white fill-white "
        />
      </IconButton>
      <span class="font-medium">Close the gallery</span>
    </div>
    {#each galleryData as room}
      <button
        on:click={() => selectRoom(room.name)}
        class="tracking-widest px-14 py-10 text-[25px] font-bold pb-0 hover:text-purple-light uppercase {room.name.toLowerCase() ===
        activeRoom.toLowerCase()
          ? '!text-black'
          : 'text-gray-disabled'}"
      >
        {room.name}
      </button>
    {/each}
  </div>
  <section style="--gap: {gap}px; --width: {width};" bind:this={wrap}>
    {#key page}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="slider slider-gallery"
        use:slidy={{
          index,
          position: position,
          loop: true,
          vertical: false,
          duration: 100,
          clamp: 0,
          snap: "center",
          gravity: 1.5,
        }}
        on:move={onMove}
      >
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        {#each activeRoomData.photo as room}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="block gallery-block group">
            <img
              src={room.url}
              alt={room.description}
              class="object-cover h-screen w-screen"
            />
          </div>
        {/each}
      </div>
    {/key}
  </section>
</div>

<style>
  .slider {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: var(--gap);
    width: 100%;
    height: 100%;
    min-width: 0;
  }
  .slider .block {
    flex: 1 0 var(--width);
    width: var(--width);
    max-width: 100%;
    height: 100%;
    position: relative;
    background: whitesmoke;
    cursor: pointer;
  }
</style>
