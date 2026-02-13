<script>
    import { link } from "svelte-spa-router";
    import LucideIcon from "../comp/LucideIcon.svelte";
    import Papers from "../comp/Papers.svelte";
    import {projects} from "../scripts/store.js";
  document.body.scrollIntoView();
export let params = {}
function getProjectByTag(tag) {
    const project = $projects.find(project => project.tag === tag);
    return project;
}
// Usage
const project = getProjectByTag(params.tag);
</script>

<div class="top-row">
  <div class="page-title">{project.title}</div>
</div>
<div class="splash">
    <img src="{project.img ? project.img : 'static/publications/placeholder.jpeg'}" alt="project figure">
    <div class="description">{project.description}</div>
</div>
<Papers filter={false} selected_project={project.tag}/>

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

@media screen and (max-width: 768px) {
    .page-title {
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
        margin-bottom: 1rem;
    }
}
</style>
