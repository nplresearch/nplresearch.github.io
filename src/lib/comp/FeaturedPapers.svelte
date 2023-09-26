<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { featured} from "../scripts/store.js";
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

<div class="featured">
    {#each $featured as publication, i}
        <div class="card"
            in:fly={{
                x: -100,
                duration: 1500,
                easing: quintOut,
                delay: i * 200,
            }}
        >
            <div class="content">
                <div class="featured_subtitle">{formatAuthors(publication.authors)}</div>
                <div class="featured_title">{publication.title}</div>
            </div>
        </div>
    {/each}
</div>
<style>
    .content{
        z-index:20;
        color: var(--clr-foreground-deep);
    }
    .featured{
        width:90%;
        margin-top:1rem;
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
    }
    .featured_subtitle{
          font-family: "Helvetica", "Arial", sans-serif;
          font-size: 0.8rem;
          font-weight: 100;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          margin-bottom: 0.5rem;
        text-align:center;
    }
    .featured_title{
        text-align:center;
        z-index:20;
        font-family: "Noto Sans TC", sans-serif;
        /* color: var(--text1); */
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.1rem;
        margin-bottom: 0.5rem;
        transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card{
        width:300px;
        height:300px;
        display:grid;
        place-items:center;
        position:relative;
        margin:1rem;
    /* transition-property: all; */
    /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
    /* transition-duration: 300ms;  */
  border: 1px solid var(--clr-lowlight1);
    }

.card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("static/publications/placeholder.jpeg");
    background-size: 130%;
    background-repeat: no-repeat;
    background-position: center;
    mix-blend-mode: luminosity; 
    border-radius: 0.3rem;
    opacity:0.45;
    transition: background-size 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255,0.85); 
  mix-blend-mode: multiply;
  border-radius: 0.3rem;
transition: background 0.3s ease;
}
.card:hover::before {
  background-size: 160%; /* Adjust the value to zoom in (e.g., 120%) */
opacity:1;
}
.card:hover::after {
  background: rgba(132, 31, 55,0.85); 
}
.card:hover>.content{
    color: var(--clr-background-deep);
}
</style>
