<script>
  import Button from "./atoms/Button.svelte";
  import contact from "@assets/images/Enzo1.png"
</script>
<div class="">
<div class="bg-white/90 p-8 rounded-[30px] min-w-[800px] flex flex-col w-full relative">
    <div class="flex flex-col justify-end gap-4 items-end absolute left-[73%] -top-[250px]">
        <img class="max-w-[330px]" src="{contact}" alt="contact">
        <div class="bg-white/50 shadow-select p-4 w-fit rounded-[50px] backdrop-blur-xl">Let me give you a hand !</div>
        <div class="bg-purple-light font-medium w-fit uppercase text-white p-4 rounded-[50px] tracking-[4px] ">chat with me</div>
    </div>
    <span class="text-[10px] tracking-[4px] ">we take care of everything</span>
    <p class="text-purple font-athena text-[35px]">Need an advice ?</p>
    <span class="text-sm py-6 max-w-lg">Depending on your needs, we will show you what options are available to you for your vacation in St. Barts. Trust the expertise of our specialists to find you the ideal villa</span>
    <div class="flex">
        <Button style="primary">fill the form</Button>
    </div>
</div>
</div>