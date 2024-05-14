<script lang="ts">
  import LabHead from "@components/travel-lab/LabHead.svelte";
  import TravelLabLayout from "@components/travel-lab/TravelLabLayout.svelte";
   //let dataURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOTIwIDgxOTIiPjxzdHlsZT4uc3Qwe2ZpbGw6bm9uZX08L3N0eWxlPjxwYXRoIGQ9Ik0xOTE3LjIgMEgwdjEyNi42QzQ5My41LTExNS4zIDE1MjUuOCA0NzIuMSAxOTE3LjIgMCIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik0xOTE3LjIgMEMxNTI1LjggNDcyLjEgNDkzLjUtMTE1LjMgMCAxMjYuNlY4MjQ2aDE5MjBWMHoiIHN0eWxlPSJmaWxsOiMxNDE0MTQiLz48cGF0aCBkPSJNMTkxNy4yIDBIMHYxMjYuNkM0OTMuNS0xMTUuMyAxNTI1LjggNDcyLjEgMTkxNy4yIDAiIGNsYXNzPSJzdDAiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiB4MT0iLTE0MDEuNzQ3IiB4Mj0iMjg4MC44MTQiIHkxPSIzOTQ3Ljg4IiB5Mj0iNDAwMS43NjIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjc4MyAwIDAgLS43ODMgMzYxLjA0OCA3MjQ3LjcyMikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MjYxNjEiLz48c3RvcCBvZmZzZXQ9Ii41OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDA7c3RvcC1vcGFjaXR5OjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0xOTE3LjIgMEMxNTI1LjggNDcyLjEgNDkzLjUtMTE1LjMgMCAxMjYuNlY4MjQ2aDE5MjBWMHoiIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pO2ZpbGwtb3BhY2l0eTouOCIvPjwvc3ZnPg==";
   // let dataURL ="data:image/svg+xml,%3Csvg width='1920' height='10462' viewBox='0 0 1920 10462' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2067.89 -2.72018e-06L2099 10462C891.365 10462 1211.05 10462 -110.417 10462C-328.223 4997.35 -792.05 -476.665 -17.1078 707.397C569.783 323.308 1980.52 1465.57 2067.89 -2.72018e-06Z' fill='%23141414'/%3E%3Cpath d='M2067.89 -2.72018e-06L2099 10462C891.365 10462 1211.05 10462 -110.417 10462C-328.223 4997.35 -792.05 -476.665 -17.1078 707.397C569.783 323.308 1980.52 1465.57 2067.89 -2.72018e-06Z' fill='url(%23paint0_linear_822_13280)' fill-opacity='0.8'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_822_13280' x1='-1280.38' y1='-3138.74' x2='3114.87' y2='-3083.44' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23626161'/%3E%3Cstop offset='0.599074' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
   // let dataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDQ2MiIgdmlld0JveD0iMCAwIDE5MjAgMTA0NjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMDY3Ljg5IC0yLjcyMDE4ZS0wNkwyMDk5IDEwNDYyQzg5MS4zNjUgMTA0NjIgMTIxMS4wNSAxMDQ2MiAtMTEwLjQxNyAxMDQ2MkMtMzI4LjIyMyA0OTk3LjM1IC03OTIuMDUgLTQ3Ni42NjUgLTE3LjEwNzggNzA3LjM5N0M1NjkuNzgzIDMyMy4zMDggMTk4MC41MiAxNDY1LjU3IDIwNjcuODkgLTIuNzIwMThlLTA2WiIgZmlsbD0iIzE0MTQxNCIvPgo8cGF0aCBkPSJNMjA2Ny44OSAtMi43MjAxOGUtMDZMMjA5OSAxMDQ2MkM4OTEuMzY1IDEwNDYyIDEyMTEuMDUgMTA0NjIgLTExMC40MTcgMTA0NjJDLTMyOC4yMjMgNDk5Ny4zNSAtNzkyLjA1IC00NzYuNjY1IC0xNy4xMDc4IDcwNy4zOTdDNTY5Ljc4MyAzMjMuMzA4IDE5ODAuNTIgMTQ2NS41NyAyMDY3Ljg5IC0yLjcyMDE4ZS0wNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl84MjJfMTMyODApIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzgyMl8xMzI4MCIgeDE9Ii0xMjgwLjM4IiB5MT0iLTMxMzguNzQiIHgyPSIzMTE0Ljg3IiB5Mj0iLTMwODMuNDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzYyNjE2MSIvPgo8c3RvcCBvZmZzZXQ9IjAuNTk5MDc0IiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
  // let dataURL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='336' viewBox='0 0 1920 336' fill='none'%3E%3Cmask id='mask0_1561_2997' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='1920' height='336'%3E%3Crect width='1920' height='336' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1561_2997)'%3E%3Cpath d='M2067.89 -540.001L2099 9922C891.366 9922 1211.05 9922 -110.416 9922C-328.222 4457.35 -792.049 -1016.67 -17.1068 167.396C569.784 -216.693 1980.52 925.568 2067.89 -540.001Z' fill='%23141414'/%3E%3Cpath d='M2067.89 -540.001L2099 9922C891.366 9922 1211.05 9922 -110.416 9922C-328.222 4457.35 -792.049 -1016.67 -17.1068 167.396C569.784 -216.693 1980.52 925.568 2067.89 -540.001Z' fill='url(%23paint0_linear_1561_2997)' fill-opacity='0.8'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1561_2997' x1='-1280.38' y1='-3678.74' x2='3114.87' y2='-3623.44' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23626161'/%3E%3Cstop offset='0.599074' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
  // let dataURL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='336' viewBox='0 0 1920 336' fill='none'%3E%3Cmask id='mask0_1561_2997' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='1920' height='336'%3E%3Crect width='1920' height='336' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1561_2997)'%3E%3Cpath d='M2067.89 -540.001L2099 9922C891.366 9922 1211.05 9922 -110.416 9922C-328.222 4457.35 -792.049 -1016.67 -17.1068 167.396C569.784 -216.693 1980.52 925.568 2067.89 -540.001Z' fill='%23141414'/%3E%3C/g%3E%3C/svg%3E"
  // let dataURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjMzNiIgdmlld0JveD0iMCAwIDE5MjAgMzM2IiBmaWxsPSJub25lIiAvPjx1c2Ugc3R5bGU9ImJhY2tncm91bmQ6bGF5ZXItd2hpdGUoOTAsICByYmEoOTgsIDAsIDAsIDApLCByYmEoMCwgMCwgMCwgMCwgMCkiPiwsPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iMzM2IiBmaWxsPSIjRDllOWQ5Ij4sPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iMzM2IiB2aWV3Qm94PSIwIiBmaWxsPSJ1cmwoI21hc2swXzE1NjFfMjk5NywgMTMyLjU1LCAtMTMyLjU1LCAtMSAxOC43KSIgLz48cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIzMzYiIGZpbGw9IiMxNDE0MTQiIC8+PC9zdmc+Cg=="
  
  let dataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIzMzYiIHZpZXdCb3g9IjAgMCAxOTIwIDMzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzE1NjFfMjk5NyIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjE5MjAiIGhlaWdodD0iMzM2Ij4KPHJlY3Qgd2lkdGg9IjE5MjAiIGhlaWdodD0iMzM2IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xNTYxXzI5OTcpIj4KPHBhdGggZD0iTTIwNjcuODkgLTU0MC4wMDFMMjA5OSA5OTIyQzg5MS4zNjYgOTkyMiAxMjExLjA1IDk5MjIgLTExMC40MTYgOTkyMkMtMzI4LjIyMiA0NDU3LjM1IC03OTIuMDQ5IC0xMDE2LjY3IC0xNy4xMDY4IDE2Ny4zOTZDNTY5Ljc4NCAtMjE2LjY5MyAxOTgwLjUyIDkyNS41NjggMjA2Ny44OSAtNTQwLjAwMVoiIGZpbGw9IiMxNDE0MTQiLz4KPC9nPgo8L3N2Zz4K"
</script>

<LabHead />
<!-- relative h-64 w-full z-30 object-cover -mb-1 object-left-top -->
<div class="relative -mt-[13%]">
  <div style="mask-image: url({dataURL}); mask-size: cover;" class="bg-lab relative top-1  object-contain w-full z-20">
    <img  src="{dataURL}" alt="" class="opacity-0" >
    <!-- <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, rgba(98, 97, 97, 0.8) -132.55%, rgba(0, 0, 0, 0) 20.77%), linear-gradient(0deg, #141414, #141414);"></div> -->
  </div>
  
  <div class="flex bg-lab relative min-h-screen">
    
    <!-- mask-image: url({dataURL}); mask-size: cover; -->
    <!-- xl:-top-[300px] lg:-top-[200px] -top-[75px] sm:-top-[100px] md:-top-[150px] -->
    <div
      class="bg-lab  absolute h-full w-full bg-cover z-10 "
      style=""
    ></div>
    <div class="h-full relative w-full flex z-20">
      <TravelLabLayout />
    </div>
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
