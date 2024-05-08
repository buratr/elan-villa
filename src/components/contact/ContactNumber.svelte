<script lang="ts">
    import IconPhone from "@assets/icons-json/140-earphone-telephone.rough.json?url";
    import LordIcon from "@components/atoms/LordIcon.svelte";
  </script>
  
  <div class="flex gap-4 md:pt-8 items-center">
    <LordIcon src={IconPhone} size="50" class="text-purple-light" />
    <a href="tel:+5900590511010" class="text-sm md:text-base text-white tracking-widest hover:text-purple-light transition-all">
      +590 (0) 590 51 10 10
    </a>
  </div>
  