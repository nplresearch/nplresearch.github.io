<script>
  import Article from "./Article.svelte";
  import moment from "moment";
  export let articles;
</script>

<div class="topper">
  <div class="page-title">ACTIVITY</div>
</div>
<div class="parent">
  <div class="sidebar">
    <div class="subtitle">CONTACT US</div>
    <div class="description">
      <a href="https://github.com/nplresearch">Github</a> • <a href="https://lordgrilo.github.io/">Giovanni Petri</a>
    </div>
  </div>

  <div class="timeline">
    <Article
      title={moment(articles[0].date, "DD-MM-YYYY").fromNow()}
      date={"today"}
      marker={true}
      description=""
    />
    {#each articles as { title, description, date }, i}
      {#if i > 0}
        {#if moment(date, "DD-MM-YYYY").format("MMMM") !== moment(articles[i - 1].date, "DD-MM-YYYY").format("MMMM")}
          <Article
            title={moment(date, "DD-MM-YYYY").format("MMMM YYYY")}
            date={"today"}
            marker={true}
            description=""
          />
        {/if}
      {/if}
      
      <Article {title} {description} {date} />
    {/each}
  </div>
</div>

<style>
  .topper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    z-index: 3;
  }
  
  .parent {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
  }

  /* Make the parent container wider and centered on larger screens */
  @media screen and (min-width: 1024px) {
    .parent {
      display: grid;
      grid-template-columns: minmax(150px, 10%) 1fr;
      max-width: 90%; /* Wider max-width */
      margin: 0 auto; /* Center it */
    }
    .timeline {
      max-width: 100%;
      margin: 0 auto;
    }
  }

  .sidebar {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    padding: 1rem;
  }

  .timeline {
    position: relative;
    z-index: 1;
    height: 100%;
    border-left: 1px solid var(--clr-lowlight2);
    padding-left: 0px;
  }

  /* Adding more side margin on mobile screens */
  @media screen and (max-width: 768px) {
    .timeline {
      padding-left: 10px;
      padding-right: 10px;
    }
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

  /* Styling for links in timeline */
  .timeline .description a {
    color: black !important;
    font-weight: bold !important;
    text-decoration: none !important;
  }

  .timeline .description a:hover {
    text-decoration: underline !important;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
