<script>
  export let text;
  export let icon_place;
  export let icon;
  export let href = "";
  export let reduced = false;
  import LucideIcon from "./LucideIcon.svelte";
</script>

<button class:reduced>
  {#if icon_place === "left"}
    <div class="icon left">
      <LucideIcon name={icon} size="20" strokeWidth="1" />
    </div>
  {/if}
  {text}
  {#if icon_place === "right"}
    <div class="icon right">
      <LucideIcon name={icon} size="20" strokeWidth="1" />
    </div>
  {/if}
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    border: 0.1rem solid var(--clr-foreground-deep);
    color: var(--clr-foreground-deep);
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 1rem;
    margin-bottom: 0;
    transition: all 0.3s ease-out;
  }

  button:hover {
    background-color: var(--clr-foreground-deep);
    color: var(--clr-background);
  }

  .reduced {
    margin: 0.1rem;
    transform: scale(0.8);
  }

  .icon {
    display: grid;
    place-items: center;
  }
  .left {
    margin-right: 0.5rem;
  }
</style>
