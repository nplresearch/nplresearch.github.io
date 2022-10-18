<script>
  export let base_color = "var(--clr-foreground)";
  export let base_size = "3";
</script>

<div
  style="--base-color:{base_color};--base-size:{base_size}px"
  class="squarebrackets"
>
  <slot />
</div>

<style>
  .squarebrackets {
    position: relative;
    width: fit-content;
    padding: calc(5 * var(--base-size));
  }
  .squarebrackets:before {
    content: " ";
    position: absolute;
    border-left: var(--base-size) solid var(--base-color);
    border-top: var(--base-size) solid var(--base-color);
    border-bottom: var(--base-size) solid var(--base-color);
    padding: calc(2.5 * var(--base-size));
    top: calc(-5 * var(--base-size));
    bottom: calc(-5 * var(--base-size));
    left: calc(-2.5 * var(--base-size));
  }
  .squarebrackets:after {
    content: " ";
    position: absolute;
    border-right: var(--base-size) solid var(--base-color);
    border-top: var(--base-size) solid var(--base-color);
    border-bottom: var(--base-size) solid var(--base-color);
    padding: calc(2.5 * var(--base-size));
    top: calc(-5 * var(--base-size));
    bottom: calc(-5 * var(--base-size));
    right: calc(-2.5 * var(--base-size));
  }
</style>
