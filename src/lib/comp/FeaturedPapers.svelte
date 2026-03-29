<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { featured } from "../scripts/store.js";
  import { Layers, Github, Presentation, X } from 'lucide-svelte';

  let expandedIndex = -1;

  function toggle(i) {
    expandedIndex = expandedIndex === i ? -1 : i;
  }

  function formatAuthors(authors) {
    if (!authors || authors.length === 0) return "";
    if (authors.length <= 3) return authors.join(", ");
    return `${authors.slice(0, 3).join(", ")} et al.`;
  }
</script>

<div class="featured-section">
  <div class="featured-label">FEATURED</div>
  <div class="featured-grid">
    {#each $featured as pub, i}
      <button
        class="featured-card"
        class:active={expandedIndex === i}
        on:click={() => toggle(i)}
        style="--bg-img: url('{pub.img || 'static/publications/placeholder.jpeg'}')"
      >
        <div class="card-content">
          <div class="card-authors">{formatAuthors(pub.authors)}</div>
          <div class="card-title">{pub.title}</div>
          <div class="card-journal">{pub.journal} ({pub.year})</div>
        </div>
      </button>
    {/each}
  </div>

  {#if expandedIndex >= 0}
    {@const pub = $featured[expandedIndex]}
    <div class="expanded-panel" transition:slide={{ duration: 300, easing: quintOut }}>
      <button class="close-btn" on:click={() => expandedIndex = -1}>
        <X size=20/>
      </button>
      <div class="panel-inner">
        <div class="panel-figure">
          <img
            src={pub.img || 'static/publications/placeholder.jpeg'}
            alt="Figure from {pub.title}"
          />
        </div>
        <div class="panel-text">
          <div class="panel-journal">{pub.journal} ({pub.year})</div>
          <h3 class="panel-title">{pub.title}</h3>
          <div class="panel-authors">{pub.authors.join(", ")}</div>
          {#if pub.abstract}
            <p class="panel-abstract">{pub.abstract}</p>
          {/if}
          <div class="panel-links">
            {#if pub.link}
              <a href={pub.link} target="_blank" title="Read Paper">
                <Layers size=18/> <span>Paper</span>
              </a>
            {/if}
            {#if pub.github}
              <a href={pub.github} target="_blank" title="View Code">
                <Github size=18/> <span>Code</span>
              </a>
            {/if}
            {#if pub.slides}
              <a href={pub.slides} target="_blank" title="Check Slides">
                <Presentation size=18/> <span>Slides</span>
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .featured-section {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .featured-label {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 0.75rem;
    font-weight: 100;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--text3);
    margin-bottom: 1rem;
  }

  .featured-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
    justify-items: center;
  }

  /* --- Card (collapsed) --- */
  .featured-card {
    position: relative;
    width: 100%;
    max-width: 360px;
    height: 300px;
    border: 1px solid var(--clr-lowlight1);
    border-radius: 0.3rem;
    cursor: pointer;
    overflow: hidden;
    display: grid;
    place-items: center;
    background: none;
    padding: 0;
    font: inherit;
    color: var(--clr-foreground-deep);
    text-align: center;
  }

  .featured-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: var(--bg-img);
    background-size: 130%;
    background-repeat: no-repeat;
    background-position: center;
    mix-blend-mode: luminosity;
    border-radius: 0.3rem;
    opacity: 0.45;
    transition: background-size 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  }

  .featured-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    mix-blend-mode: multiply;
    border-radius: 0.3rem;
    transition: background 0.3s ease;
  }

  .featured-card:hover::before {
    background-size: 160%;
    opacity: 1;
  }

  .featured-card:hover::after {
    background: rgba(132, 31, 55, 0.85);
  }

  .featured-card:hover .card-content {
    color: var(--clr-background-deep);
  }

  .featured-card.active {
    border-color: var(--clr-mixred);
  }

  .featured-card.active::after {
    background: rgba(132, 31, 55, 0.75);
  }

  .featured-card.active::before {
    opacity: 0.8;
  }

  .featured-card.active .card-content {
    color: var(--clr-background-deep);
  }

  .card-content {
    z-index: 20;
    padding: 1.5rem;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-authors {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 0.75rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    margin-bottom: 0.5rem;
  }

  .card-title {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.05rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .card-journal {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 0.7rem;
    font-weight: 300;
    font-style: italic;
    letter-spacing: 0.1rem;
    opacity: 0.8;
  }

  /* --- Expanded panel (full width below cards) --- */
  .expanded-panel {
    position: relative;
    width: 100%;
    margin-top: 1.5rem;
    border: 1px solid var(--clr-lowlight1);
    border-radius: 0.3rem;
    background: var(--clr-background-deep);
    overflow: hidden;
  }

  .close-btn {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 10;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text3);
    padding: 0.25rem;
    border-radius: 50%;
    transition: color 0.2s ease;
  }

  .close-btn:hover {
    color: var(--clr-red);
  }

  .panel-inner {
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }

  .panel-figure {
    flex: 0 0 45%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .panel-figure img {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 0.2rem;
  }

  .panel-text {
    flex: 1;
    min-width: 0;
  }

  .panel-journal {
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 0.7rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: var(--clr-mixred);
    margin-bottom: 0.5rem;
  }

  .panel-title {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 1.15rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    color: var(--text1);
  }

  .panel-authors {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    color: var(--text3);
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .panel-abstract {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 0.85rem;
    font-weight: 300;
    line-height: 1.7;
    color: var(--text2);
    margin-bottom: 1.25rem;
  }

  .panel-links {
    display: flex;
    gap: 1.25rem;
  }

  .panel-links a {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    color: var(--text3);
    text-decoration: none;
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
    transition: color 0.2s ease;
  }

  .panel-links a:hover {
    color: var(--clr-red);
  }

  /* --- Mobile --- */
  @media (max-width: 900px) {
    .featured-grid {
      grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
    }

    .featured-card {
      max-width: none;
      height: 260px;
    }
  }

  @media (max-width: 768px) {
    .featured-grid {
      grid-template-columns: 1fr;
    }

    .featured-card {
      height: 220px;
    }

    .panel-inner {
      flex-direction: column;
      padding: 1.5rem;
      gap: 1.25rem;
    }

    .panel-figure {
      flex: none;
    }

    .panel-figure img {
      max-height: 250px;
    }

    .card-title {
      font-size: 0.85rem;
    }

    .panel-title {
      font-size: 1rem;
    }
  }
</style>
