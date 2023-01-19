<script>
  import Publication from "./Publication.svelte";
  import Button from "./Button.svelte";
  import { link } from "svelte-spa-router";
  import LucideIcon from "./LucideIcon.svelte";
  export let publications = [
    {
      title:
        "Evidence from sperm whale clans of symbolic marking in non-human cultures",
      authors: ["John Doe", "Peter Parker", "Mary Jane"],
      links: {
        pdf: "https://arxiv.org/pdf/2007.14900.pdf",
        code: "www.google.com",
        bib: "www.google.com",
      },
    },
    {
      title:
        "Evidence from sperm whale clans of symbolic marking in non-human cultures",
      authors: ["John Doe", "Peter Parker", "Mary Jane"],
      links: {
        pdf: "https://arxiv.org/pdf/2007.14900.pdf",
        code: "www.google.com",
        bib: "www.google.com",
      },
    },
  ];
</script>

<div class="top-row">
  <div class="page-title">PUBLICATIONS</div>
  <a href={"/"} use:link>
    <div class="button">
      <!-- <Button icon="arrow left" icon_place="left" text="Home" /> -->
      <LucideIcon name={"arrow left"} size="30" strokeWidth="1" />
    </div>
  </a>
</div>

<div class="publications">
  {#each publications as publication, i}
    <Publication side={i % 2} {...publication} />
  {/each}
</div>

<style>
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
