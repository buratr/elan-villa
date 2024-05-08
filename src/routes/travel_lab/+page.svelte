<script lang="ts">
  import LabHead from "@components/travel-lab/LabHead.svelte";
  import TravelLabLayout from "@components/travel-lab/TravelLabLayout.svelte";
  let dataURL =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOTIwIDgxOTIiPjxzdHlsZT4uc3Qwe2ZpbGw6bm9uZX08L3N0eWxlPjxwYXRoIGQ9Ik0xOTE3LjIgMEgwdjEyNi42QzQ5My41LTExNS4zIDE1MjUuOCA0NzIuMSAxOTE3LjIgMCIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik0xOTE3LjIgMEMxNTI1LjggNDcyLjEgNDkzLjUtMTE1LjMgMCAxMjYuNlY4MjQ2aDE5MjBWMHoiIHN0eWxlPSJmaWxsOiMxNDE0MTQiLz48cGF0aCBkPSJNMTkxNy4yIDBIMHYxMjYuNkM0OTMuNS0xMTUuMyAxNTI1LjggNDcyLjEgMTkxNy4yIDAiIGNsYXNzPSJzdDAiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiB4MT0iLTE0MDEuNzQ3IiB4Mj0iMjg4MC44MTQiIHkxPSIzOTQ3Ljg4IiB5Mj0iNDAwMS43NjIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjc4MyAwIDAgLS43ODMgMzYxLjA0OCA3MjQ3LjcyMikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MjYxNjEiLz48c3RvcCBvZmZzZXQ9Ii41OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDA7c3RvcC1vcGFjaXR5OjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0xOTE3LjIgMEMxNTI1LjggNDcyLjEgNDkzLjUtMTE1LjMgMCAxMjYuNlY4MjQ2aDE5MjBWMHoiIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pO2ZpbGwtb3BhY2l0eTouOCIvPjwvc3ZnPg==";
</script>

<LabHead />
<div class="flex bg-lab relative min-h-screen">
  <div
    class="bg-lab absolute h-full w-full bg-cover z-10 xl:-top-[300px] lg:-top-[200px] -top-[75px] sm:-top-[100px] md:-top-[150px]"
    style="mask-image: url({dataURL});mask-size: cover"
  ></div>
  <div class="h-full relative w-full flex z-20">
    <TravelLabLayout />
  </div>
</div>

<style lang="postcss">
  .bg-lab {
    background: linear-gradient(
        90deg,
        rgba(98, 97, 97, 0.8) -132.55%,
        rgba(0, 0, 0, 0) 20.77%
      ),
      linear-gradient(0deg, #141414, #141414);
  }
</style>
