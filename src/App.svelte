<script>
  import Router from "svelte-spa-router";
  import Home from "./lib/Home.svelte";
  import NotFound from "./lib/NotFound.svelte";
  import Chord from "./lib/Chord.svelte";
  import Publications from "./lib/Publications.svelte";
  import People from "./lib/People.svelte";

  let scroll;

  const routes = {
    "/": Home,
    "/publications": Publications,
    "/people": People,
    "*": NotFound,
  };
</script>

<svelte:window bind:scrollY={scroll} />

<div class="background" style="transform:translate(0,{scroll / 1.5}px)">
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
  >
  <Router {routes} />
  <div class="buffer">
    <div>
      NPL © {new Date().getFullYear()}
    </div>
    <!-- <div>
      Website by <a href="https://antonio-leitao.github.io/">António Leitão</a>
    </div> -->
  </div>
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
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 3rem;
    width: 70%;
    margin-top: 3rem;
    text-align: center;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.3);
  }
  a {
    color: inherit;
  }
</style>
