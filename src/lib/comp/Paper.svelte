
<script>
  export let title;
  export let authors;
  export let link;
  export let projects;
  export let abstract;
  export let year;
  export let slides;
  export let journal; // Add journal field
  export let github;
  export let open = false;
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import LucideIcon from "./LucideIcon.svelte";
  import { Layers, Github, Presentation } from 'lucide-svelte';

  function cropString(str, N) {
  if (str.length > N) {
    return str.slice(0, N) + "...";
  } else {
    return str;
  }

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
        let formattedAuthors = formatted.replace(/\\n/g, "").replace(/\\t/g, "");
        return formattedAuthors;
    }
    function extendedAuthors(authors){
          return authors.join(', ')
    }
</script>


<div class="row_author">
    {#if open}
        {extendedAuthors(authors)}


    {:else}
        {truncatedAuthors(authors)}
    {/if}
</div>
<div class="row_title">{title}

    <!-- Show journal reference if available -->

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

</div>
<div class="row_year">
    {#if year}
    {year}
    {:else}
        1999
{/if}
</div>



<a href={link} target="_blank" title="Download PDF">
<div class="row_link">
    {#if link}
        <!-- <LucideIcon name={"Skull"} size=18/> -->
        <Layers size=18/>
    {/if}
</div>
</a>

<a href={github} target="_blank" title="View Code">
<div class="row_link">
    {#if github}
        <!-- <LucideIcon name={"code"} size=18/> -->
        <Github size=18/>
    {/if}
</div>
</a>

<a href={slides} target="_blank" title="Check Slides">
  <div class="row_link">
      {#if slides}
          <!-- <LucideIcon name={"presentation"} size=18/> -->
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
    padding-right:0.5rem
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
    color: var(--text2);  /* Slightly lighter color for journal reference */
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
    place-items:center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  }
    .row_link:hover{
      color: var(--clr-mixred);
    }
  
.row_abstract{
    margin-top:0.2rem;
}


</style>