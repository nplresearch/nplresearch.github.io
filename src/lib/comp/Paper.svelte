<script>
    export let title;
    export let authors;
    export let link;
    export let projects;
    export let abstract;
    export let year;
    export let slides;
    export let journal;
    export let github;
    export let open = false;
    
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { Layers, Github, Presentation } from 'lucide-svelte';
  
    function cropString(str, N) {
      return str.length > N ? str.slice(0, N) + "..." : str;
    }
  
    function truncatedAuthors(authors) {
      let formatted;
      switch (authors.length) {
        case 1:
          formatted = `${authors[0]}`;
          break;
        case 2:
          formatted = `${authors[0]} and ${authors[1]}`;
          break;
        default:
          formatted = `${authors[0]} et al.`;
      }
      return formatted.replace(/\\n/g, "").replace(/\\t/g, "");
    }
  
    function extendedAuthors(authors) {
      return authors.join(', ');
    }
  </script>
  
  <div class="row_author">
    {#if open}
      {extendedAuthors(authors)}
    {:else}
      {truncatedAuthors(authors)}
    {/if}
  </div>
  
  <div class="row_title">{title}</div>
  
  {#if open}
    {#if journal}
      <div class="row_journal">{journal}</div>
    {/if}
    <div class="description row_abstract"
      in:fly={{
        y: -10,
        duration: 500,
        easing: quintOut,
      }}
    >{abstract}</div>
  {/if}
  
  <div class="row_year">
    {year || 1999}
  </div>
  
  <a href={link} target="_blank" title="Download PDF">
    <div class="row_link">
      {#if link}
        <Layers size=18/>
      {/if}
    </div>
  </a>
  
  <a href={github} target="_blank" title="View Code">
    <div class="row_link">
      {#if github}
        <Github size=18/>
      {/if}
    </div>
  </a>
  
  <a href={slides} target="_blank" title="Check Slides">
    <div class="row_link">
      {#if slides}
        <Presentation size=18/>
      {/if}
    </div>
  </a>
  
  <style>
    .row_author {
      flex: 20%;
      font-family: "Noto Sans TC", sans-serif;
      color: var(--text3);
      font-weight: 300;
      font-size: 0.85rem;
      padding-right: 0.5rem;
      min-width: 100px; /* Ensures a minimum width for consistent alignment */
    }
  
    .row_title {
      flex: 70%;
      font-family: "Noto Sans TC", sans-serif;
      color: var(--text3);
      font-size: 1rem;
      font-weight: 500;
    }
  
    .row_journal {
      font-family: "Noto Sans TC", sans-serif;
      color: var(--text2);
      font-size: 0.85rem;
      margin-top: 0.3rem;
    }
  
    .row_year {
      font-family: "Noto Sans TC", sans-serif;
      color: var(--text3);
      font-weight: 300;
      font-size: 0.85rem;
      flex: 10%;
    }
  
    .row_link {
      font-family: "Noto Sans TC", sans-serif;
      color: var(--text3);
      font-weight: 100;
      font-size: 1rem;
      width: 2rem;
      max-height: 1.5rem;
      display: grid;
      place-items: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .row_link:hover {
      color: var(--clr-mixred);
    }
  
    .row_abstract {
      margin-top: 0.2rem;
    }
  </style>
  