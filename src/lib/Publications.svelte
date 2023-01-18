<script>
  function randomFloat(start, end) {
    return Math.random() * (end - start) + start;
  }
</script>

<div class="stack">
  {#each { length: 7 } as _, i}
    <div class="paper" style="--random:{randomFloat(-1, 1)}; --order:{i}" />
  {/each}
</div>

<style>
  .stack {
    display: grid;
    place-items: center;
    margin: 2rem;
    position: relative;
    min-width: 7rem;
    aspect-ratio: 1/1.4;
  }
  .paper {
    position: absolute;
    top: 0;
    display: grid;
    place-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    width: 6rem;
    aspect-ratio: 1/1.4;
    cursor: pointer;
    background-color: var(--text1);

    /* Functional props*/
    position: absolute;
    --rotation: calc(calc(60deg / -4) + calc(calc(60deg / 25)) * var(--order));
    transform: rotate(calc(var(--random) * 10deg))
      translate(calc(var(--random) * 10px), calc(var(--random) * 10px));
    transform-origin: center 120%;
    transition: all 0.5s cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }

  .stack:hover > .paper {
    transform: rotate(calc(calc(60deg / -2) + 10deg * var(--order)));
    transform-origin: center 120%;
    box-shadow: -15px 2px 15px rgba(0, 0, 0, 0.07),
      0px 0px 8px rgba(0, 0, 0, 0.07);
  }
</style>
