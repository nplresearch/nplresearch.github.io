<script>
    import { link } from "svelte-spa-router";
    import LucideIcon from "../comp/LucideIcon.svelte";
    import Papers from "../comp/Papers.svelte";
    import {papers} from "../scripts/store.js";
  document.body.scrollIntoView();
export let params = {}
function getPublicationByTag(tag) {
    const publication = $papers.find(publication => publication.tag === tag);
    return publication;
}
// Usage
const project = getPublicationByTag(params.tag);
</script>

<div class="top-row">
  <div class="page-title">{publication.title}</div>
  <a href={"/projects"} use:link>
    <div class="button">
      <!-- <Button icon="arrow left" icon_place="left" text="Home" /> -->
      <LucideIcon name={"arrow left"} size="30" strokeWidth="1" />
    </div>
  </a>
</div>
<div class="splash">
    <img src="{publication.img ? publication.img : 'static/publications/placeholder.jpeg'}" alt="project figure">
    <div class="description">{publication.description}</div>
</div>
<Papers filter={false} selected_project={publication.tag}/>

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

  /* child element that is always on the left */
  .button {
    display: grid;
    place-items: center;
    position: absolute;
    top: 0%;
    left: 13%;
    width: auto; /* width determined by the content */
    text-align: left;
    cursor: pointer;
    color: var(--clr-foreground-deep);
  }
  .button:hover {
    color: var(--clr-mixred);
  }

  a {
    color: inherit;
    font: inherit;
    text-decoration: inherit;
  }
  .splash{
      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      width:800px;
  }
  .description{
      font-size:1rem;
      margin-bottom:1rem;
  }

  img{
      width:100%;
  border: 1px solid var(--clr-lowlight1);
  border-radius: 0.375rem;
  padding: 0.375rem;
  background-color: #FFFFFF;
  }

@media screen and (max-width: 1024px){
    .splash{
    width:89%;
    }
}
</style>
