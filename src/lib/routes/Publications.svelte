<script>
    import { link } from "svelte-spa-router";
    import LucideIcon from "../comp/LucideIcon.svelte";
    import Papers from "../comp/Papers.svelte";
    import FeaturedPapers from "../comp/FeaturedPapers.svelte";
    document.body.scrollIntoView();

</script>

<div class="top-row">
  <div class="page-title">PUBLICATIONS</div>
</div>
<!-- <FeaturedPapers/> -->
<Papers/>

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


  a {
    color: inherit;
    font: inherit;
    text-decoration: inherit;
  }

</style>
