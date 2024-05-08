<script lang="ts">
  import ContactBG from "@assets/images/ContactBG.png";
  import ContactInfo from "./ContactInfo.svelte";
  import CrewImage from "@assets/images/Crew.png";
</script>

<div class="relative flex justify-between bg-cover !bg-no-repeat" style="background-image: url({ContactBG});">
  <ContactInfo />
</div>
