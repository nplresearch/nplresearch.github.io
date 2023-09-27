
<script>
  export let title;
  export let authors;
  export let link;
  export let projects;
  export let abstract;
  export let year;
  export let open = false;
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  function cropString(str, N) {
  if (str.length > N) {
    return str.slice(0, N) + "...";
  } else {
    return str;
  }
}

function formatAuthors(authors) {
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
</script>


<div class="row_author">
    {#if open}
        {authors}
    {:else}
        {formatAuthors(authors)}
    {/if}
</div>
<div class="row_title">{title}

{#if open}
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
        2023
{/if}
</div>


<style>
.row_author {
    flex: 20%;
    font-family: "Helvetica", "Arial", sans-serif;
    color: var(--text3);
    font-weight: 100;
    font-size: 1rem;
  }

 .row_title {
    flex: 70%;
    font-family: "Noto Sans TC", sans-serif;
    color: var(--text3);
    font-size: 1rem;
    font-weight: 500;
  }

  .row_year {
    font-family: "Helvetica", "Arial", sans-serif;
    color: var(--text3);
    font-weight: 100;
    font-size: 1rem;
    flex: 10%;
  }
.row_abstract{
    margin-top:0.2rem;
}


</style>
