<script>
  import { link, push } from "svelte-spa-router";
  import LucideIcon from "../comp/LucideIcon.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import {people, alumni} from "../scripts/store.js";
  document.body.scrollIntoView();
  console.log($people);
  console.log($alumni);
</script>

<div class="top-row">
  <div class="page-title">PEOPLE</div>
  <a href={"/"} use:link>
    <div class="button">
      <LucideIcon name={"arrow left"} size="30" strokeWidth="1" />
    </div>
  </a>
</div>
<div class="track">
    {#each $people as { name, tag, title, bio, avatar, url }, i}
        <div in:fly={{
                x: -100,
                duration: 500,
                easing: quintOut,
                delay: i * 50,
            }} on:click={() => push(`/people/${tag}`)}>
            <div class="window">
                <div class="face" style="background-image: url({avatar ? avatar : 'static/people/npc_placeholder.jpeg'})"></div>
                <div class="subtitle">{title}</div>
                <div class="title" style="text-align:center">{name}</div>
            </div>
        </div>
    {/each}
</div>
<div class="page-title">
    Alumni
</div>
<div class="track">
    {#each $alumni as { name, tag, title, bio, avatar, url }, i}
        <div in:fly={{
                x: -100,
                duration: 500,
                easing: quintOut,
                delay: i * 50,
            }} on:click={() => push(`/alumni/${tag}`)}>
            <div class="window">
                <div class="face" style="background-image: url({avatar ? avatar : 'static/people/npc_placeholder.jpeg'})"></div>
                <div class="subtitle">{title}</div>
                <div class="title" style="text-align:center">{name}</div>
            </div>
        </div>
    {/each}
</div>

<style>
    .window{
        display:grid;
        place-items: center;
        margin-bottom:0.375rem;
        cursor:pointer;
    }
    .window:hover>.face{
      border-color: var(--clr-mixred);
      box-shadow: 0 4px 6px -1px rgba(132, 31, 55,0.8),
    0 2px 4px -2px rgba(132, 31, 55,0.8);
    }
    .face{
        width:200px;
        height:200px;
        border-radius:50%;
        margin-bottom:0.375rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center; 
        border: 2px solid var(--clr-lowlight1);
        box-shadow: var(--base-shadow);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .title{
        font-size:1.4rem;
    }
    .track{
        width:90%;
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-content:center;
    }
  .subtitle {
    text-align: center;
    margin-bottom: 0;
    color: var(--text3);
    transition: all 0.5s ease-out;
  }

  .page-title {
    font-family: Helvetica;
    font-size: 1.4rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
    text-align: center;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    margin-top: 0rem;
    color: var(--text1);
    margin-bottom: 2rem;
  }

  .top-row {
    position: relative;
    display: flex;
    align-items: center; /* center the children vertically */
    justify-content: center;
    width: 100%;
    margin-bottom:1rem;
  }

  /* child element that is always on the left */
  .button {
    display: grid;
    place-items: center;
    position: absolute;
    top: 0%;
    left: 13%;
    width: auto; /* width determined by the content */
    text-align: left;
    cursor: pointer;
    color: var(--clr-foreground-deep);
  }
  .button:hover {
    color: var(--clr-mixred);
  }

  a {
    color: inherit;
    font: inherit;
    text-decoration: inherit;
  }
</style>
