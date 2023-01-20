<script>
  import { link } from "svelte-spa-router";
  import LucideIcon from "./LucideIcon.svelte";
  import Person from "./Person.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { parse } from "toml";
  async function loadPeople() {
    const response = await fetch("static/people.toml");
    const tomlString = await response.text();
    const data = parse(tomlString);
    return data["researchers"];
  }
</script>

<div class="top-row">
  <div class="page-title">PEOPLE</div>
  <a href={"/"} use:link>
    <div class="button">
      <LucideIcon name={"arrow left"} size="30" strokeWidth="1" />
    </div>
  </a>
</div>

{#await loadPeople()}
  ...waiting
{:then researchers}
  {#each researchers as { name, title, bio, avatar }, i}
    <div
      class="researcher"
      in:fly={{
        x: -100,
        duration: 1000,
        easing: quintOut,
        delay: i * 150,
      }}
    >
      <div class="subtitle">{title}</div>
      <Person url={avatar}>
        <div class="title">{name}</div>
      </Person>
      <div class="description">{bio}</div>
    </div>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .researcher {
    position: relative;
    max-width: 50ch;
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .researcher:hover > .subtitle {
    color: var(--text1);
  }

  .researcher:hover > .description {
    color: var(--text1);
  }

  .researcher:hover {
    background-color: rgb(255, 255, 255, 0.05);
    box-shadow: 0 10px 15px rgb(0 0 0 / 40%);
    color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(15px);
    background-blend-mode: overlay;
  }
  .subtitle {
    margin-bottom: 0;
    color: var(--text3);
    transition: all 0.5s ease-out;
  }

  .description {
    margin-top: 0;
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
