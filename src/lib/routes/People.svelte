<script>
  import { link, push } from "svelte-spa-router";
  import LucideIcon from "../comp/LucideIcon.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { people } from "../scripts/store.js";
  document.body.scrollIntoView();
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
<div class="temp-line">
    <div class="card temp">
        <div class="subtitle">2nd Best</div>
        <div class="title" style="text-align:center">Alice Patania</div>
        <div class="description">A computational topologist and my research focus is to develop and apply new topological approaches to study complex systems. </div>
    </div>
</div>

<style>
    .window{
        display:grid;
        place-items: center;
        margin-bottom:0.375rem;
        cursor:pointer;
    }
    .window:hover>.face{
        background-size:130%;
    }
    .face{
        width:200px;
        height:200px;
        border-radius:50%;
        margin-bottom:0.375rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center; 
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
.card{
        height:250px;
        margin:1rem;
    }
    .temp{
        width:300px;
        margin-top:100rem;
        right:0;
    }
    .temp-line{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width:100%
    }
  .subtitle {
    text-align: center;
    margin-bottom: 0;
    color: var(--text3);
    transition: all 0.5s ease-out;
  }

  .description {
    margin-top: 0;
    color: var(--text3);
    transition: all 0.5s ease-out;
    max-height:10ch;
    overflow:hidden;
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
