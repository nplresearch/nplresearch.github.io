<script>
  import { projects } from "../scripts/store.js";
  import {push} from 'svelte-spa-router';
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  document.body.scrollIntoView();
</script>

{#each $projects as project, i}
        <div in:fly={{
                x: -100,
                duration: 500,
                easing: quintOut,
                delay: i * 50,
            }} class="small-card"
        on:click={() => push(`/projects/${project.tag}`)}>
            <div class="small-content">
                <div class="featured_title">{project.title}</div>
            </div>
        </div>

    <div in:fly={{
                x: -100,
                duration: 500,
                easing: quintOut,
                delay: i * 50,
            }} 
        class="card"
        on:click={() => push(`/projects/${project.tag}`)}>
        <div class="image">

        </div>
        <div class="content">
            <div class="title">{project.title}</div>
            <div class="description">{project.description}</div>
        </div>
    </div>
{/each}

<style>
.card{
    display:flex;
    width:800px;
    max-width:none;
    height:16rem;
    flex-direction:row;
    margin-bottom:1rem;
    padding:0;
}
.image{
    flex:25%;
    position:relative;
}
.image::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("static/publications/placeholder.jpeg");
    background-size: 130%;
    background-repeat: no-repeat;
    background-position: center;
    mix-blend-mode: luminosity; 
    border-radius: 0.3rem;
    opacity:0.45;
    transition: background-size 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.description{
    margin-top:0.3rem;
}

.image::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255,0.85); 
  mix-blend-mode: multiply;
  border-radius: 0.3rem;
transition: background 0.3s ease;
}

.small-card{
    padding: 1.5rem;
    border-radius: 0.375rem;
    max-width: 28rem;
    background-color: #ffffff;
    cursor: pointer;
    box-shadow: var(--base-shadow);
    width:300px;
    height:300px;
    display: none;
    place-items:center;
    position:relative;
    margin:1rem;
    /* transition-property: all; */
    /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
    /* transition-duration: 300ms;  */
    border: 1px solid var(--clr-lowlight1);
}

.small-card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("static/publications/placeholder.jpeg");
    background-size: 130%;
    background-repeat: no-repeat;
    background-position: center;
    mix-blend-mode: luminosity; 
    border-radius: 0.3rem;
    opacity:0.45;
    transition: background-size 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.small-card::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255,0.85); 
    mix-blend-mode: multiply;
    border-radius: 0.3rem;
    transition: background 0.3s ease;
}
.small-card:hover::before {
  background-size: 160%; /* Adjust the value to zoom in (e.g., 120%) */
    opacity:1;
}
.small-card:hover::after {
  background: rgba(132, 31, 55,0.85); 
}
.small-card:hover>.small-content{
color: var(--clr-background-deep);
}

.featured_title{
    text-align:center;
    z-index:30;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position:relative;
}

@media screen and (max-width: 1024px){
    .small-card{
        display:grid;
    }
    .card{
        display:none;
    }
}

.card:hover>.image::before {
    background-size: 160%; /* Adjust the value to zoom in (e.g., 120%) */
    opacity:1;
}
.small-content{
    color: black;
}
.content{
        flex:75%;
  padding: 1.2rem 1.2rem 1.2rem 0;
    }
</style>
