<script>
  import HeaderVilla from "@components/HeaderVilla.svelte";
  import BgBeige from "@assets/background/BackgroundBeige.webp";
  import Copyright from "@components/Copyright.svelte";
  import HeadLayout from "@components/villa/HeadLayout.svelte";
  import VillaBook from "@components/villa/VillaBook.svelte";
  import VillaGallery from "@components/villa/VillaGallery.svelte";
  import PlansLayout from "@components/villa/plans/PlansLayout.svelte";
  import VillaContact from "@components/villa/contact/VillaContact.svelte";
  import Similar from "@components/villa/contact/Similar.svelte";
  import VillaSurroundings from "@components/villa/surroundings/VillaSurroundings.svelte";
  import { getVillaFromSlug } from "@lib/data";
  import VacationPlanLayout from "@components/villa/vacation-plan/VacationPlanLayout.svelte";
  
  let data = getVillaFromSlug('blanc-bleu');
</script>

<div class="relative z-10" style="background-image: url({BgBeige});">
  <HeaderVilla />
  <HeadLayout />
  <VillaBook />
  <VillaGallery villa={data.villa} />
  <PlansLayout />
  <VillaSurroundings/>
  <VacationPlanLayout />
  <VillaContact />
  <Similar />
  <Copyright></Copyright>
</div>
