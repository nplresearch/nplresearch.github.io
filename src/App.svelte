<script>
  import Router from "svelte-spa-router";
  import Landing from "./lib/Landing.svelte";
  import NotFound from "./lib/NotFound.svelte";
  import Chord from "./lib/Chord.svelte";
  import Timeline from "./lib/Timeline.svelte";
  import Papers from "./lib/Papers.svelte";
  let scroll;

  const routes = {
    // Exact path
    "/": Landing,

    // Using named parameters, with last being optional
    //"/project/:name": Project,
    "/publications": Papers,

    // Catch-all
    // This is optional, but if present it must be the last
    "*": NotFound,
  };
</script>

<svelte:window bind:scrollY={scroll} />

<div class="background" style="transform:translate(0,{scroll / 1.8}px)">
  <div class="centerpiece">
    <div class="column">
      <Chord RATE={0.999} INV_RATE={0.8} />
    </div>
    <div class="column">
      <Chord RATE={0.999} INV_RATE={0.95} />
    </div>
  </div>
</div>

<div class="center">
  <Router {routes} />
  <div class="buffer" />
</div>

<style>
  .background {
    display: grid;
    place-items: center;
    height: 100vh;
    background-image: -webkit-radial-gradient(
      top,
      circle cover,
      rgba(8, 22, 29, 0.6) 20%,
      #000 110%
    );
    z-index: -1;
  }
  .centerpiece {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    z-index: -1;
    filter: blur(3px);
  }
  .column {
    width: 35vw;
  }
  .center {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
    margin: 0 auto;
    display: grid;
    place-items: center;
    z-index: 1;
  }
  .buffer {
    height: 3rem;
    width: 70%;
    margin-top: 3rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
</style>
