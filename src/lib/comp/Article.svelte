<script>
  export let description;
  export let marker = false;
  export let date;
  export let title;
  import moment from "moment";
</script>

<div class:card={!marker} class:small_card={marker} class:article={!marker}>
  {#if !marker}
    <div class="dater">{moment(date, "DD-MM-YYYY").format("MMM Do")}</div>
  {/if}

  <div
    class="article-title"
    style="--c: {marker ? 'var(--clr-mixred)' : 'var(--text1)'}"
  >
    {title}
  </div>
  
  {#if description}
    <!-- Use {@html} to render the description as raw HTML, allowing links -->
    <div class="description">
      {@html description}
    </div>
  {/if}
</div>

<style>
  .article {
    cursor: pointer;
  }
  .card {
    margin: 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    max-width: 70ch;
  }
  .small_card {
    margin: 1rem;
    border-radius: 0.5rem;
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
    margin-bottom: 0.5rem;
    z-index: 2;
  }
  .article-title::before {
    content: "";
    background-color: var(--c);
    border-radius: 50%;
    position: absolute;
    top: 30%;
    left: -1.9rem;
    width: 0.6rem;
    height: 0.6rem;
    z-index: 3;
  }

  .description {
    margin-top: 0;
  }

  /* More specific style for links inside description */
  div.description a {
    color: black !important;
    font-weight: bold !important;
    text-decoration: none !important;
  }

  div.description a:hover {
    text-decoration: underline !important;
  }

  .dater {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 0.7rem;
    color: var(--text3);
  }
</style>
