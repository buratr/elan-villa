<script lang="ts">
  import AllVillasLayout from "@components/all-villas/AllVillasLayout.svelte";
  import Search from "@components/all-villas/Search.svelte";
  import SearchMobile from "@components/all-villas/SearchMobile.svelte";
  import Villas from "@components/all-villas/Villas.svelte";
  import AllFilters from "@components/filters/AllFilters.svelte";
  import Button from "@components/atoms/Button.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import MemberBadge from "@components/all-villas/MemberBadge.svelte";
  import { useModal } from "@components/Modal.svelte";
  import VillaSpecialist from "@components/VillaSpecialist.svelte";

  const openSpecialist = () => {
    const modal = useModal({ backdropClose: true, size: "lg", overflow: true });

    modal.open(VillaSpecialist);
  };
</script>

<AllVillasLayout>
  <div slot="search" class="flex w-full justify-center md:justify-end">
    <div class="hidden md:flex w-full justify-end">
      <Search />
    </div>
    <div class="md:hidden w-full py-11">
      <SearchMobile />
    </div>
  </div>
  <div slot="filters" class="pl-20 pr-8 h-full flex flex-col justify-between">
    <div>
      <AllFilters />

      <Button style="outlined" class="!py-[4px]" on:click={() => openSpecialist()}>
        villa specialist
        <LordIcon
          name="question-mark"
          size="32"
          class="text-purple-secondary group-hover:text-white"
        />
      </Button>
    </div>
    <MemberBadge class="top-20 z-20 hidden md:flex w-[368px]" />
  </div>
  <div slot="villas">
    <Villas />
  </div>
</AllVillasLayout>
