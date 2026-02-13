<script>
  import Router from "svelte-spa-router";
  import {link} from 'svelte-spa-router'
  import Home from "./lib/routes/Home.svelte";
  import People from "./lib/routes/People.svelte";
  import Projects from "./lib/routes/Projects.svelte";
  import Publications from "./lib/routes/Publications.svelte";
  import NotFound from "./lib/routes/NotFound.svelte";
    import Person from "./lib/routes/Person.svelte";
    import Alumni from "./lib/routes/Alumni.svelte";
    import Project from "./lib/routes/Project.svelte";
    import Publication from "./lib/routes/Publication.svelte";
    import Code from "./lib/routes/Code.svelte";
    import LucideIcon from "./lib/comp/LucideIcon.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  const routes = {
    "/": Home,
    "/publications": Publications,
    "/publications/:tag": Publication,
    "/people": People,
    "/people/:tag": Person,
    "/alumni/:tag": Alumni,
    "/projects": Projects,
    "/projects/:tag": Project,
    "/code": Code,
    "*": NotFound,
  };
  let open = false;
</script>

<!-- <svelte:window bind:scrollY={scroll} /> -->
<div class="hamburger" class:disable_mouse={!open}>
    <div class="backdrop" class:open_backdrop={open}></div>
    {#if open}
    <div class="ham-list">
        <a on:click={()=>open=false} in:fly={{y: 20, duration: 600, easing: quintOut, delay:10, opacity:0}} href="/" class="ham-item" use:link>Home</a>
        <a on:click={()=>open=false} in:fly={{y: 20, duration: 600, easing: quintOut, delay:10, opacity:0}} href="/projects" class="ham-item" use:link>Projects</a>
        <a on:click={()=>open=false} in:fly={{y: 20, duration: 600, easing: quintOut,delay:30,opacity:0}} href="/people" class="ham-item" use:link>People</a>
        <a on:click={()=>open=false} in:fly={{y: 20, duration: 600, easing: quintOut, delay:60, opacity:0}} href="/publications" class="ham-item" use:link>Publications</a>
        <a on:click={()=>open=false} in:fly={{y: 20, duration: 600, easing: quintOut, delay:90, opacity:0}} href="/code" class="ham-item" use:link>Code</a>
    </div>
    {/if}
    <div class="ham-btn" on:mousedown={()=>open=!open}>
        {#if open}
        <div >
            <LucideIcon name={"close"}/>
        </div>
        {:else}
            <div>
                <LucideIcon name={"menu"}/>
            </div>
        {/if}
    </div>
</div>
<div class="navbar">
    <div class="drawer">
    <div class="inner-drawer">
        <div class="items">
            <a href="/" class="nav-home" use:link>
                    Home
            </a>
            <div class="hidden-items">
            <a href="/projects" class="nav-item" use:link>Projects</a>
            <a href="/people" class="nav-item" use:link>People</a>
            <a href="/publications" class="nav-item" use:link>Publications</a>
            <a href="/code" class="nav-item" use:link>Code</a>
            </div>
        </div>
    </div>
</div>
</div>

<div style="display:flex:width:100%"></div>
<div class="center">
  <Router {routes} />
  <div class="buffer">
    <div>
      NPL © {new Date().getFullYear()}
    </div>
  </div>
</div>

<style>
  /* .background { */
 /*  display: grid;*/
 /*  place-items: center;*/
 /*  height: 100vh;*/
 /*  background-image: -webkit-radial-gradient(*/
 /*    top,*/
 /*    circle cover,*/
 /*    rgba(8, 22, 29, 0.6) 20%,*/
 /*    #000 110%*/
 /*  );*/
 /*  z-index: -1;*/
 /*}*/
  .center {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0 auto;
    display: grid;
    place-items: center;
    z-index: 1;
    margin-top:2rem;
  }
  .buffer {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 3rem;
    width: 70%;
    margin-top: 3rem;
    text-align: center;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 0.7rem;
    color: var(--clr-foreground);
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  .hamburger{
    position: fixed; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    z-index: 50; 
    width: 100%;
  }
  .disable_mouse{
      pointer-events: none;
  }
  .backdrop{
    position: absolute; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    right: 0; 
    width: 100%; 
    background-color: #ffffff;
    clip-path:circle(0px at 100% 0);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
  }
  .ham-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute; 
    padding-left: 2.5rem;
    padding-right: 2.5rem; 
    padding-top: 4rem;
    padding-bottom: 4rem; 
    gap: 0.75rem; 
    width: 100%;
  }
  .ham-item{
      position:relative;
      cursor: pointer;
      margin-top: 2rem;
      font-family: "Helvetica", "Arial", sans-serif;
      color: var(--text1);
      font-size: 1.5rem;
      font-weight: 100;
      letter-spacing: 0.25rem;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
  }
  .ham-item:hover{
      color:var(--clr-mixred);
  }
  .navbar{
    position: sticky;
    right: 0;
    left: 0; 
    top:0;
    z-index: 30; 
    border-bottom-width: 1px; 
    width: 100%; 
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
    background-color:#ffffff;
    border-bottom: 1px solid var(--clr-lowlight1);
  }
  .drawer{
    padding-left: 0.625rem;
    padding-right: 0.625rem; 
    width: 100%; 
    max-width: 1280px; 
  }
  .inner-drawer{
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    height: 3.5rem; 
  }
  .items{
    display: flex; 
    margin-left: 1rem; 
    align-items: center; 
  }
  .hidden-items{
    display: none; 
    margin-left: 0.75rem; 
    margin-left: 0.875rem; 
    align-items: center;
  }

  .nav-item{
    z-index: 10; 
    padding-top: 0.375rem;
    padding-bottom: 0.375rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
    border-radius: 9999px; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    text-transform: capitalize; 
      font-family: "Helvetica", "Arial", sans-serif;
      color: var(--clr-foreground-deep);
      font-size: 0.8rem;
      font-weight: 100;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
    cursor:pointer;
  }
.nav-item:hover{
      color:var(--clr-mixred);
  }

  .nav-home{
    z-index: 10; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    text-transform: capitalize; 
      font-family: "Helvetica", "Arial", sans-serif;
      color: var(--clr-foreground-deep);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 
    cursor:pointer;
  }
  .ham-btn{
    position: absolute; 
    top: 1.25rem; 
    right: 1.25rem; 
    z-index: 20; 
    pointer-events: auto;
    cursor:pointer;
  }
  .open_backdrop{
    clip-path:circle(2200px at 100% 0)
  }
  @media screen and (min-width: 1024px){
      .drawer{
          padding-left: 5rem;
          padding-right: 5rem; 
      }
      .hidden-items{
          display: flex;
      }
      .hamburger{
          display: none;
      }
  }
</style>

