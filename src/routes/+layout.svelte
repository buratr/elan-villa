<script lang="ts">
  import "../app.css";
  import Header from "@components/Header.svelte";
  import Footer from "@components/Footer.svelte";
  import FooterMobile from "@components/FooterMobile.svelte";
  import Modal from "@components/Modal.svelte";
  import { navigating } from "$app/stores";
  import { closeMenu } from "@lib/menu-store";
  import { getVillaFromSlug } from "@lib/data";
  import { onMount } from "svelte";
  import HeaderMobile from "@components/HeaderMobile.svelte";
  import BackToTop from "@components/BackToTop.svelte";

  let villaPage: boolean = false;

  let headerLinks = [
    {
      label: "all villas",
      path: "/all_villas",
    },
    {
      label: "map",
      path: "/map",
    },
    {
      label: "travel lab’",
      path: "/travel_lab",
    },
  ];

  // Check if the route matches villa/[slug] and set the headerComponent accordingly
  const checkRoute = () => {
    const pathArray = window.location.pathname.split("/");
    if (pathArray[1] === "villa") {
      villaPage = true;
    }
  };

  onMount(checkRoute);

  $: if ($navigating) {
    closeMenu();
    $navigating.to?.route.id === "/villa/[slug]" || $navigating.to?.route.id === "/villa/blanc-bleu"
      ? (villaPage = true)
      : (villaPage = false);
  }
</script>

<svelte:head>
  <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>v
</svelte:head>

<div class="pb-[63px] md:p-0">
  <div class:hidden={villaPage}>
    <Header links={headerLinks} />
  </div>
  <!-- <HeaderMobile links={headerLinks} /> -->
  <Modal />
  <slot />
  <div class:hidden={villaPage}>
    <Footer />
    <FooterMobile />
  </div>
  <BackToTop />
</div>
