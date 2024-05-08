<script lang="ts">
  import Circle from "@components/atoms/Circle.svelte";

  let activeSeasons = [
    {
      id: 1,
      title: "Summer season",
      desc: "Apr. 15 to Dec. 14",
      active: false,
    },
    {
      id: 2,
      title: "Winter season",
      desc: "Jan. 11 to Apr. 14",
      active: false,
    },
    {
      id: 3,
      title: "Festive season",
      desc: "Dec. 15 to Jan. 10",
      active: false,
    },
  ];

  const selectSeason = (id: number) => {
    activeSeasons.forEach((season, index) => {
      season.id === id
        ? (activeSeasons[index]["active"] = true)
        : (activeSeasons[index]["active"] = false);
    });
  };
</script>

<div class="flex flex-col gap-4 w-full md:max-w-[80%]">
  {#each activeSeasons as season}
    <div class="flex w-full justify-between">
      <div class="flex flex-col text-white">
        <p>{season.title}</p>
        <span class="text-xs">
          {season.desc}
        </span>
      </div>
      <button on:click={() => selectSeason(season.id)}>
        <Circle light selected={season.active} />
      </button>
    </div>
  {/each}
</div>
