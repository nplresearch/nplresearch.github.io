<script>
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let url = "";
  let isHovered = false;
  let x;
  let y;
  let rect;
  let scroll;
  $: rect = rect && rect.getBoundingClientRect();

  function mouseOver(event) {
    isHovered = true;
    x = event.clientX - rect.left;
    y = event.clientY - rect.top + scroll;
  }
  function mouseMove(event) {
    x = event.clientX - rect.left;
    y = event.clientY - rect.top + scroll;
  }
</script>

<svelte:window bind:scrollY={scroll} />

<div
  bind:this={rect}
  on:mouseover={mouseOver}
  on:mouseleave={() => (isHovered = false)}
  on:mousemove={mouseMove}
>
  <slot />
</div>

{#if isHovered}
  <div
    in:scale={{
      duration: 500,
      opacity: 0.5,
      start: 0.5,
      easing: quintOut,
    }}
    style="background-image:url({url}); top: {y - 50}px; left: {x + 70}px;"
    class="tooltip"
  />
{/if}

<style>
  .tooltip {
    border: 1px solid var(--text2);
    box-shadow: 1px 1px 1px #ddd;
    border-radius: 0.1rem;
    position: absolute;
    background-size: 150px;
    width: 150px;
    height: 150px;
  }
</style>
