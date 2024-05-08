<script lang="ts">
  import LoyaltyInfo from "./LoyaltyInfo.svelte";
  import LoyaltyBG from "@assets/images/LoyaltyBG.png";
  import LoyaltyBGMobile from "@assets/images/LoyaltyBGmobile.png";
  import ImageGift from "@assets/images/gift-reward-white 1.png";
  import IconGiftLine from "@assets/svgs/images/VectorGift.svg?component";
  import ImageGiftLine from "@assets/svgs/images/VectorGift.svg?url";
</script>

<div class="relative pb-80 md:pb-[20%] lg:pb-[24%] -mb-[10%]">
  <LoyaltyInfo />
  <img
    src={LoyaltyBG}
    class="absolute hidden md:block left-0 bottom-0"
    alt=""
  />
  <img
    src={LoyaltyBGMobile}
    class="absolute md:hidden mb-60 left-0 bottom-0 w-full h-full"
    alt=""
  />
  <img
    src={ImageGift}
    alt="Gift Revard"
    class="absolute hidden md:block -top-[13%] w-[30%] stroke-white right-0"
  />
  <IconGiftLine class="absolute hidden md:block -top-[5%] w-full stroke-white right-[20%]" />

  <div class="flex md:hidden relative justify-end w-full overflow-hidden">
    <img src={ImageGiftLine} alt="" class="object-cover object-right stroke-white stroke-4 -mr-[145px] mt-[60px]" />
    <img
      src={ImageGift}
      alt="Gift Revard"
      class="w-[420px] stroke-white right-0"
    />
  </div>
</div>
