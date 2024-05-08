<script>
  import Button from "@components/atoms/Button.svelte";
  import Input from "@components/atoms/Input.svelte";
  import IconNotification from "@assets/icons-json/144-envelope-mail-notification.rough.json?url";
  import LordIcon from "@components/atoms/LordIcon.svelte";
</script>

<div class="flex flex-col pt-16">
  <p class="uppercase text-xl text-purple-light font-medium">NEWSLETTER</p>
  <p class="font-athena text-3xl text-white pt-2 tracking-widest pb-8">
    Subscribe to our Newsletter
  </p>
  <div class="flex gap-4 flex-wrap">
    <Input
      class="min-w-[260px] placeholder:text-center placeholder:italic"
      placeholder="Enter your email"
    >
      <LordIcon slot="icon" src="{IconNotification}" size="50" class="text-purple" />
    </Input>
    <Button style="primary">SUBSCRIBE</Button>
  </div>
</div>
