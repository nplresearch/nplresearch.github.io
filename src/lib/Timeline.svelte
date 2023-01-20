<script>
  import Article from "./Article.svelte";
  import moment from "moment";
  export let articles;
</script>

<div class="topper">
  <div class="page-title">RECENT ACTIVITY</div>
</div>
<div class="parent">
  <div class="sidebar">
    <div class="subtitle">CONTACT US</div>
    <div class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
      dignissimos, quasi quo in adipisci suscipit ipsam consequuntur iusto
      architecto minus pariatur possimus quod tempora, corrupti laudantium,
      consequatur impedit tenetur aliquam.
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
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
    margin-bottom: 5px;
    /* box-shadow: 0 15px 30px rgb(0, 0, 0, 0.8); */
    z-index: 3;
  }
  .parent {
    height: 100%;
    display: grid;
    grid-template-columns: minmax(150px, 30%) 1fr;
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
    border-left: 1px solid var(--text3);
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
</style>
