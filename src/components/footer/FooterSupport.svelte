<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import Input from "@components/atoms/Input.svelte";
  import IconNotification from "@assets/icons-json/144-envelope-mail-notification.rough.json?url";
  import IllustrationQuestion from "@assets/svgs/illustrations/9illustration.svg?component"
  import ImageFlag from "@assets/images/drapeau_2.png";
  import LordIcon from "@components/atoms/LordIcon.svelte";
</script>

<div class="flex flex-col pt-16 order-1 md:order-none">
  <div class="flex items-end gap-8 max-w-[60%] md:max-w-none">
    <div>
      <p class="uppercase text-xl text-purple-light font-medium">SUPPORT</p>
      <p class="font-athena text-3xl text-white pt-2 tracking-widest">
        How can we help you
      </p>
    </div>
    <div class="md:w-[262px] w-[40%] h-[139px] flex overflow-hidden absolute right-0">
      <IllustrationQuestion class="stroke-purple w-[260px] scale-[200%] -translate-x-1/4" />
    </div>
  </div>

  <div class="flex gap-8 lg:gap-16 items-center pt-10 flex-wrap">
    <div class="relative">
      <textarea
        class="rounded-[50px] hidden md:block p-8 outline-0 placeholder:italic"
        placeholder="Ask for what you need"
        cols="30"
        rows="6"
      />
      <textarea
        class="rounded-[50px] md:hidden p-8 outline-0 placeholder:italic"
        placeholder="Ask for what you need"
        cols="22"
        rows="6"
      />
      <div
        class="absolute border rounded-[50px] border-purple-light w-full h-full top-4 left-4 -z-10"
      />
    </div>
    <div class="flex flex-col gap-4">
      <Input
        class="min-w-[260px] placeholder:text-center placeholder:italic"
        placeholder="Your phone number"
        type="number"
      >
        <img src={ImageFlag} slot="icon" alt="" />
      </Input>
      <Input
        class="min-w-[260px] placeholder:text-center placeholder:italic"
        placeholder="Your email"
      >
        <LordIcon slot="icon" src="{IconNotification}" size="36" class="text-purple" />
      </Input>
      <Button style="primary">SUBSCRIBE</Button>
    </div>
  </div>
</div>
