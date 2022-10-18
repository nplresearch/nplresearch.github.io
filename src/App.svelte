<script>
  import Braces from "./lib/Braces.svelte";
  import Router from "svelte-spa-router";

  import { onMount } from "svelte";
  //import { createScene } from "./lib/scene.js";
  import { createScene } from "./lib/lorenz_background";
  import Brakets from "./lib/Brakets.svelte";

  import Home from "./lib/Home.svelte";
  import Project from "./lib/Project.svelte";
  import NotFound from "./lib/NotFound.svelte";

  const routes = {
    // Exact path
    "/": Home,

    // Using named parameters, with last being optional
    "/project/:name": Project,

    // Catch-all
    // This is optional, but if present it must be the last
    "*": NotFound,
  };

  let el;
  onMount(() => {
    createScene(el);
  });
</script>

<canvas bind:this={el} />

<div class="center">
  <Router {routes} />
</div>

<!-- <div class="grid">
  <div class="apple-white glass">
    <div class="title">CETI Project</div>
    <div class="subtitle">This is a subtitle of some importance</div>
    <div class="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta fugiat
      libero eum iusto consequuntur soluta magni quam quasi. Optio ullam sed
      vitae animi nesciunt deserunt, assumenda praesentium? Similique,
      necessitatibus vero?
    </div>
    <button> CLICK </button>
  </div>
  <div class="one-liner">
    This is a message in one line. At NPL we are commited to some meaning.
  </div>
  <Braces title="Important" description="For some reason" />

  <div class="apple-white glass logo">
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 891.72 691.7"
      ><defs
        ><style>
          .cls-1,
          .cls-2,
          .cls-3 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
          }
          .cls-2,
          .cls-3 {
            stroke-linecap: round;
          }
          .cls-2 {
            stroke-width: 16.49px;
          }
          .cls-3 {
            stroke-width: 16px;
          }
        </style></defs
      ><path
        d="M1405.4,402.3c-25.65-18.14-52.08-17.23-79.19-11.7-19.64,3.14-20,25.85-26.71,40.62-31.09,85.77-129.31,120.85-208.86,149.31,14,16.83,19.77,46.73-11.58,38.75-24.87-7.09-44.84-29.18-71.7-26.44-43.61,3-87.58,1.56-131.3.93-34.06,3.77-73.25-8.41-71.84-49-5.36-68.49,52-52.23,99.21-58.67,78.13-4.43,157.45-7.71,232.77-30.45,46.48-38.28,60.47,16.32,129.37-52.09,15-7.27,7-23.85,21.25-30.81,16-4.93,33.74-16.09,50.09-15.36,2.56,9.89,10.33,4.26,15.69,5.83C1372.93,372.21,1403.22,374,1405.4,402.3Z"
        transform="translate(-513.68 -190.36)"
      /><g id="lVSR3I.tif"
        ><path
          d="M876.1,190.36c3.61.36,7.22.77,10.83,1.08q120,10.13,208.65,91.71a333.88,333.88,0,0,1,50.68,59.19c2,3,2.31,6.09.37,9.17-1.82,2.9-4.63,3.89-8,3.42-2.92-.42-4.59-2.47-6.12-4.74a322.42,322.42,0,0,0-33.12-41.11,329.32,329.32,0,0,0-85.19-64.7A324.31,324.31,0,0,0,903.85,209c-64.94-8.49-127.13,1.13-186.34,29.31a323.05,323.05,0,0,0-93.41,66.83c-46.79,48.08-77.42,104.93-89,171.12-17.77,101.85,6.65,193.08,72.42,272.9,28.89,35.06,64.23,62.33,104.83,82.69C748.18,849.77,786,861.13,826,864.74q148.23,13.41,258.62-86.66c29.46-26.73,52.68-58.39,70.54-94,.36-.71.67-1.44,1.06-2.13,2.27-4.09,6.65-5.6,10.59-3.64a7.68,7.68,0,0,1,3.42,10.64c-4,7.82-8,15.67-12.54,23.22q-53.23,89.17-146.43,135.16a330.15,330.15,0,0,1-114.57,32.81c-97.17,9.41-184-16.48-258.92-79-63.46-52.92-102.8-120.71-118.05-202-2.89-15.41-3.71-31.2-5.5-46.81a14.89,14.89,0,0,0-.49-1.94V521.89a13.26,13.26,0,0,0,.49-2.19,332.68,332.68,0,0,1,5.94-49.43c14.26-71.94,47.81-133.51,100.83-184,59.18-56.36,129.85-87.94,211.42-94.83,3.49-.3,7-.72,10.47-1.08Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M852.77,745.77c-53-3.2-99-22.62-137.38-59.55A206.68,206.68,0,0,1,667.77,616c-2.77-6.66,1.51-12.56,8.31-11.58,3.34.48,5.07,2.77,6.27,5.66a186.63,186.63,0,0,0,25.47,44c31.49,40.2,72.41,64.8,122.79,73.29,9.62,1.62,19.46,2,29.21,2.67,5.1.38,8.53,3.39,8.45,8s-3.55,7.68-8.68,7.71Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M859.74,415.3c32.63.39,58.34,9.88,80.71,28.46,3.9,3.23,4.5,8,1.53,11.51s-7.74,3.73-11.63.51c-20.25-16.72-43.47-25.27-69.75-24.64s-49.33,10.18-68.84,27.9a135,135,0,0,0-9.42,9.86c-3.39,3.76-8,4.52-11.55,1.67s-3.85-7.84-.46-11.84q28.21-33.27,71.11-41.33C848.6,416.06,856,415.72,859.74,415.3Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M946.31,348.61c0,6-5.23,9-11.31,7.11-11.85-3.75-23.6-8.16-35.74-10.57-44.53-8.88-87.07-2.37-127.46,18.36a14.24,14.24,0,0,1-3.54,1.44,7.68,7.68,0,0,1-8.81-4.89,7.6,7.6,0,0,1,3.88-9.78c7.56-3.65,15.07-7.48,22.9-10.44,51.42-19.45,102.79-18.93,154,1C944.59,342.53,946.3,344.79,946.31,348.61Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M652,533.2c1.41-55.84,21-104.22,59.85-144.57,3.38-3.5,8.1-3.64,11.37-.48s3.28,7.87-.09,11.36a195.69,195.69,0,0,0-55.53,144.57c.23,6.5-5.44,10.61-11,8a7.38,7.38,0,0,1-4.55-7C652,541.11,652,537.16,652,533.2Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M921.18,737c-4.41-.07-7.54-2.7-8.2-6.34-.74-4,1.42-7.56,5.47-9,6.86-2.51,13.8-4.81,20.54-7.62a187.91,187.91,0,0,0,63.91-43.22,13.51,13.51,0,0,1,6.55-3.48c3.06-.67,6,1.51,7.37,4.39a7.67,7.67,0,0,1-1.94,9.22c-6.93,6.48-13.71,13.17-21.08,19.12C973,716.86,949.25,728.11,924,736.38A24.42,24.42,0,0,1,921.18,737Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M742.29,534.38c.13-2,.26-5.74.64-9.47.5-4.75,3.84-7.56,8.39-7.27,4.35.27,7.47,3.76,7.09,8.55a108.55,108.55,0,0,0,1.12,27.48,105.24,105.24,0,0,0,29,56.32,12.66,12.66,0,0,1,3.12,5.2,7.31,7.31,0,0,1-3.83,8.25,7.64,7.64,0,0,1-9.51-1.54c-5-5.68-10.27-11.3-14.6-17.52C749.46,583.93,742.48,561.08,742.29,534.38Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M864.44,656.48c-15.41,0-28.61-2.2-41.41-6.73-4.09-1.45-5.93-4-5.84-7.91.11-5.38,5-8.48,10.5-7.11,8.22,2,16.45,4.4,24.83,5.42,19.52,2.38,38.18-1.31,55.92-9.74,1.43-.68,2.8-1.48,4.25-2.1a7.86,7.86,0,0,1,10.17,3.55c1.87,3.67.75,8.45-3.06,10.28a192.73,192.73,0,0,1-20.15,8.57A107.43,107.43,0,0,1,864.44,656.48Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M702.37,766a25.53,25.53,0,0,1-4.78-2.06,258.21,258.21,0,0,1-53.21-49.64c-3.07-3.76-2.68-8.63.72-11.39,3.58-2.91,8.33-2.31,11.53,1.57,14.68,17.79,31.17,33.65,50.2,46.79a7.71,7.71,0,0,1,3.15,9.11C708.86,763.62,706.06,765.59,702.37,766Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M992.06,776.77c0,4.41-1.9,6.78-5,8.16-11.81,5.24-23.46,11-35.56,15.41-10.43,3.85-21.36,6.35-32.13,9.24-4.81,1.29-9-1.2-10-5.44-1.1-4.73,1.43-8.6,6.6-9.78a253.84,253.84,0,0,0,64.33-23.6C986,767.7,992.09,771.33,992.06,776.77Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M581.06,499.5c2.25-10.71,3.88-21.61,6.9-32.1,3.82-13.26,8.66-26.22,13.29-39.23a7.57,7.57,0,0,1,9.65-4.72,7.78,7.78,0,0,1,5.4,8.51,15.21,15.21,0,0,1-1.08,3.37c-8.8,21-15.1,42.6-17.87,65.22-.59,4.74-4.09,7.68-8.46,7.33S581.57,504.12,581.06,499.5Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M909.44,258.75c9,2.15,18.11,4.07,27.06,6.5a257.57,257.57,0,0,1,43.19,16.27c4.15,2,5.95,5.33,5.08,9.31-1.09,5-6.39,7.27-11.53,5.08-8.35-3.56-16.65-7.26-25.14-10.45a218.4,218.4,0,0,0-40.33-10.71,7.7,7.7,0,0,1-6.69-8.66C901.52,262,905,259.06,909.44,258.75Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M642.39,378.21a7.77,7.77,0,0,1-6.57-12.5c4.67-6,9.28-12.1,14.29-17.82a261.35,261.35,0,0,1,36.27-34.11c4.19-3.27,9-3.09,11.88.43,3,3.71,2.21,8.47-2.11,11.87-17.89,14.09-33.91,30-47.34,48.46C647.14,376.83,645.08,378.34,642.39,378.21Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M1092.87,670.42a7.65,7.65,0,0,1,6.45,11.94c-5.76,9-11.42,18.13-18.16,26.35-8.76,10.69-18.46,20.62-27.92,30.72a7.43,7.43,0,0,1-9.76,1.18c-3-1.87-4.56-5.48-3.27-8.75a16.25,16.25,0,0,1,4-5.38,254.6,254.6,0,0,0,37.42-45.15c1.51-2.32,2.86-4.74,4.35-7.07A7.51,7.51,0,0,1,1092.87,670.42Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M1024.16,424.1c-2-1.27-4.51-2.12-5.84-3.88a202.28,202.28,0,0,0-42.45-42,7.83,7.83,0,1,1,9.27-12.61A205.33,205.33,0,0,1,1030.88,411a7.39,7.39,0,0,1,.54,8.39,7.13,7.13,0,0,1-6.77,4Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M1018.91,765.58a8.55,8.55,0,0,1-8.83-8.76,8.91,8.91,0,1,1,17.82-.19A8.67,8.67,0,0,1,1018.91,765.58Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M785.48,795.05a9,9,0,0,1-9.28,8.72,9,9,0,0,1-8.71-9,9.18,9.18,0,0,1,9.19-8.93A9,9,0,0,1,785.48,795.05Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M623.92,407.32a9,9,0,0,1-9.11-8.95,9.11,9.11,0,0,1,9-8.87,8.89,8.89,0,0,1,9,9A8.72,8.72,0,0,1,623.92,407.32Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M710.84,301.08a8.94,8.94,0,0,1,8.8-9,9.19,9.19,0,0,1,9.1,9.08,9,9,0,0,1-8.89,8.9A8.8,8.8,0,0,1,710.84,301.08Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M605.54,624.61a8.94,8.94,0,1,1,0,17.88,8.94,8.94,0,1,1,0-17.88Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M1075,379.68a8.94,8.94,0,0,1,9-9.12,9.05,9.05,0,0,1,9,8.87,9,9,0,0,1-17.91.25Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M875.41,807.47a8.74,8.74,0,0,1,8.89-8.79,8.95,8.95,0,0,1,0,17.89A8.75,8.75,0,0,1,875.41,807.47Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M821.32,256a9,9,0,0,1,9,8.77,9.09,9.09,0,0,1-8.93,9.21,9,9,0,0,1-.1-18Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M590.33,570.51a8.7,8.7,0,0,1,9,8.67,8.88,8.88,0,0,1-8.8,9.24,9.07,9.07,0,0,1-9.08-9A8.89,8.89,0,0,1,590.33,570.51Z"
          transform="translate(-513.68 -190.36)"
        /><path
          d="M1037.6,335.94a8.71,8.71,0,0,1,8.75-8.92,9,9,0,1,1,.21,17.91A8.69,8.69,0,0,1,1037.6,335.94Z"
          transform="translate(-513.68 -190.36)"
        /></g
      ><path
        class="cls-1"
        d="M859.4,536.22"
        transform="translate(-513.68 -190.36)"
      /><path
        class="cls-1"
        d="M1150.88,374.16"
        transform="translate(-513.68 -190.36)"
      /><path
        class="cls-2"
        d="M1043.93,453.26"
        transform="translate(-513.68 -190.36)"
      /><path
        class="cls-3"
        d="M1105.3,647.43"
        transform="translate(-513.68 -190.36)"
      /><path
        class="cls-3"
        d="M943.91,598.76"
        transform="translate(-513.68 -190.36)"
      /></svg
    >
    <div class="displaytitle">CETI Project</div>
    <div class="logosubtitle">Cetacean Translation Initiative</div>
  </div>
</div> -->
<style>
  .center {
    display: grid;
    place-items: center;
  }
  canvas {
    position: fixed;
    max-height: 100vh;
    max-width: 100vw;
    z-index: -100;
    top: 0;
    left: 0;
  }
  .grid {
    display: grid;
    place-items: center;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0.1rem solid var(--clr-foreground-deep);
    color: var(--clr-foreground-deep);
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 1rem;
    transition: all 0.3s ease-out;
  }

  button:hover {
    background-color: var(--clr-foreground-deep);
    color: var(--clr-background);
  }

  .title {
    font-family: "Noto Sans TC", sans-serif;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-shadow: var(--weird-shadow);
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-family: "Helvetica", "Arial", sans-serif;
    color: var(--clr-foreground-deep);
    font-size: 0.8rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 0.5rem;
  }

  .description {
    font-family: "Helvetica", "Arial", sans-serif;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 100;
    font-size: 0.8rem;
    margin-top: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.05rem;
  }

  .apple-white {
    margin-top: 10rem;
    width: 450px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    width: 300px;
    height: 300px;
    overflow-y: hidden;
  }

  .displaytitle {
    position: relative;
    margin-top: 2rem;
    font-family: "Helvetica", "Arial", sans-serif;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    text-shadow: var(--weird-shadow);
    margin-bottom: 0.5rem;
  }

  .logosubtitle {
    position: relative;
    font-family: "Helvetica", "Arial", sans-serif;
    color: var(--clr-foreground-deep);
    font-size: 0.5rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 0.5rem;
  }

  svg {
    fill: rgba(255, 255, 255, 0.8);
    text-shadow: var(--weird-shadow);
  }
</style>
