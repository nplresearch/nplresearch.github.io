<script>
  import { onMount } from "svelte";
  import { createScene } from "./DOFscene.js";
  //import {createScene} from "./Attractor.js";

  let el;

  onMount(() => {
    createScene(el);
  });
</script>

<canvas bind:this={el} />
