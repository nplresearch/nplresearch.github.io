<script>
    import { link } from "svelte-spa-router";
    import LucideIcon from "../comp/LucideIcon.svelte";
    import Papers from "../comp/Papers.svelte";
    import {people} from "../scripts/store.js";
    import Button from "../comp/Button.svelte";
    document.body.scrollIntoView();
    function getTitleByTag(tag) {
        const person = $people.find(person => person.tag === tag);
        return person;
    }
// Usage
  document.body.scrollIntoView();
export let params = {}
const person = getTitleByTag(params.tag);
</script>

<div class="top-row">
  <div class="page-title">{person.name}</div>
  <a href={"/people"} use:link>
    <div class="button">
      <!-- <Button icon="arrow left" icon_place="left" text="Home" /> -->
      <LucideIcon name={"arrow left"} size="30" strokeWidth="1" />
    </div>
  </a>
</div>
<div class="splash">
    <div class="face" style="background-image: url({person.avatar ? person.avatar : 'static/people/npc_placeholder.jpeg'})"></div>
    <div class="subtitle">{person.title}</div>
    <div class="title" >{person.name}</div>
    <div class="description">{person.bio}</div>
    <Button
            icon_place="left"
            icon={"home"}
            text={"homepage"}
            href={person.url}
            reduced={true}
          />
</div>
<Papers person={person.tag}/>

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

    .face{
        width:200px;
        height:200px;
        border-radius:50%;
        margin-bottom:0.375rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center; 
}
  .top-row {
    position: relative;
    display: flex;
    align-items: center; /* center the children vertically */
    justify-content: center;
    width: 100%;
  }
  .splash{
      display:flex;
      flex-direction: column;
      width:400px;
      align-items: center;
      justify-content: center;
      margin:1rem 0 1rem 0;
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

  .description{
      margin-top:0.375rem;
  }
  .subtitle{
      margin:0;
  }
  .title{
      margin:0;
  }
  /* @media screen and (min-width: 1024px){ */
  /*     .splash{ */
  /*         width: 800px; */
  /*         align-items: flex-start; */
  /*         justify-content: left; */
  /*     } */
  /* } */
</style>
