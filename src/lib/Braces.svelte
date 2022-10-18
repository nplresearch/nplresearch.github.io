<script>
  export let description = "RESEARCH";
  export let title = "NPL";

  import Brakets from "./Brakets.svelte";
</script>

<Brakets>
  <div>
    <div class="title">{title}</div>
    {#if description !== ""}
      <div class="paragraph">{description}</div>
    {/if}
  </div>
</Brakets>

<style>
  .title {
    text-align: center;
    font-size: var(--base-size);
    font-weight: 1000;
    letter-spacing: calc(var(--base-size) / 12);
    color: var(--logo-text);
    text-transform: uppercase;
    font-family: "Helvetica", "Arial", sans-serif;
    transition: all 0.8s ease-out;
  }

  .paragraph {
    font-size: calc(var(--base-size) / 4);
    font-weight: 100;
    text-align: center;
    letter-spacing: calc(var(--base-size) / 10);
    color: var(--logo-text);
    text-transform: uppercase;
    font-family: "Helvetica", "Arial", sans-serif;
    transition: all 0.8s ease-out;
  }
</style>
