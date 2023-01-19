<script>
  export let description;
  export let marker = false;
  export let date;
  export let title;
</script>

<div class="card">
  <div
    class="article-title"
    style="--c: {marker ? 'var(--clr-mixred)' : 'var(--text1)'}"
  >
    {title}
  </div>
  {#if description}
    <div class="description">{description}</div>
  {/if}
</div>

<style>
  .card {
    margin: 1rem;
    /* border: 1px solid rgba(255, 255, 255, 0.2); */
    border-radius: 0.2rem;
    padding: 0.5rem;
    max-width: 70ch;
  }

  .article-title {
    position: relative;
    font-family: "Noto Sans TC", sans-serif;
    color: var(--c);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-shadow: var(--weird-shadow);
    margin-bottom: 0.5rem;
    z-index: 2;
  }
  .article-title::before {
    content: "";
    background-color: var(--c);
    border-radius: 50%;
    /* border: 1rem solid, black; */
    position: absolute;
    top: 30%;
    left: -1.85rem;
    width: 0.6rem;
    height: 0.6rem;
    box-shadow: 0 0 2px 0.5rem rgba(0, 0, 0, 1);
    z-index: 3;
  }
  .description {
    margin-top: 0;
    color: rgba(255, 255, 255, 0.3);
  }
</style>
