<script>
    import { onMount } from "svelte";
    import { link } from "svelte-spa-router";
    import { Home, Github, ArrowLeft, Twitter, Mail, Linkedin, BookOpen, Hash, Instagram } from "lucide-svelte";
    import Papers from "../comp/Papers.svelte";
    import { people } from "../scripts/store.js";
    import Button from "../comp/Button.svelte";
  
    export let params = {};
    const person = $people.find((p) => p.tag === params.tag);
  
    let chars = "!<>-$_@\\/=+[]&{}—=+*^?#______";
    let num_digits = 8;
    let number = Array(num_digits).fill("0").join("");
    let num_tries = 15;
  
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
  
    async function generateNumber() {
        for (let digit = 0; digit < num_digits; digit++) {
            for (let i = 0; i < num_tries - 2 * digit; i++) {
                number =
                    number.substr(0, digit) +
                    chars[Math.floor(Math.random() * chars.length)] +
                    number.substr(digit + 1);
                await sleep(10);
            }
            number =
                number.substr(0, digit) +
                Math.floor(Math.random() * 10).toString() +
                number.substr(digit + 1);
        }
    }
  
    onMount(() => {
        generateNumber();
        document.body.scrollIntoView();
    });
  </script>
  
  <div class="top-row">
    <div class="page-title">NPC #{number}</div>
    <a href={"/people"} use:link>
        <div class="button">
            <ArrowLeft size="30" strokeWidth="1" />
        </div>
    </a>
  </div>
  
  <div class="splash">
    <div class="face" style="background-image: url({person.avatar ? person.avatar : 'static/people/npc_placeholder.jpeg'})"></div>
    <div class="subtitle">{person.title}</div>
    <div class="title">{person.name}</div>
    <div class="description">{person.bio}</div>
  
    <div class="button-container">
        {#if person.url}
            <a href={person.url} target="_blank" class="icon-button" title="Homepage">
                <Home size="24" />
            </a>
        {/if}
        {#if person.github}
            <a href={person.github} target="_blank" class="icon-button" title="GitHub">
                <Github size="24" />
            </a>
        {/if}
        {#if person.twitter}
            <a href={person.twitter} target="_blank" class="icon-button" title="Twitter">
                <Twitter size="24" />
            </a>
        {/if}
        {#if person.mastodon}
            <a href={person.mastodon} target="_blank" class="icon-button" title="Mastodon">
                <Hash size="24" />
            </a>
        {/if}
        {#if person.instagram}
            <a href={person.instagram} target="_blank" class="icon-button" title="Instagram">
                <Instagram size="24" />
            </a>
        {/if}
        {#if person.email}
            <a href={"mailto:" + person.email} class="icon-button" title="Email">
                <Mail size="24" />
            </a>
        {/if}
        {#if person.linkedin}
            <a href={person.linkedin} target="_blank" class="icon-button" title="LinkedIn">
                <Linkedin size="24" />
            </a>
        {/if}
        {#if person.scholar}
            <a href={person.scholar} target="_blank" class="icon-button" title="Google Scholar">
                <BookOpen size="24" />
            </a>
        {/if}
        {#if person.orcid}
            <a href={person.orcid} target="_blank" class="icon-button" title="ORCID">
                <Hash size="24" />
            </a>
        {/if}
    </div>
  </div>
  
  <!-- Pass showAuthors={false} to hide authors in Papers component -->
  <Papers selected_person={person.tag} showAuthors={false} />
  
  <style>
    .page-title {
        font-family: Helvetica;
        font-size: 1.4rem;
        font-weight: 100;
        text-align: center;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
        color: var(--text1);
        margin-bottom: 2rem;
    }
  
    .face {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 0.75rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
  
    .top-row {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
  
    .splash {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 600px;
        align-items: center;
        justify-content: center;
        margin: 1rem 0;
        padding: 0 1rem;
    }
  
    .button {
        display: grid;
        place-items: center;
        position: absolute;
        top: 0;
        left: 13%;
        cursor: pointer;
        color: var(--clr-foreground-deep);
    }
  
    .button:hover {
        color: var(--clr-mixred);
    }
  
    .button-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }
  
    .icon-button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text3);
        transition: color 0.3s ease;
    }
  
    .icon-button:hover {
        color: var(--clr-mixred);
    }
  
    .description {
        margin-top: 0.375rem;
        margin-bottom: 0.5rem;
        text-align: center;
        padding: 0 1rem;
    }
  
    .subtitle,
    .title {
        margin: 0;
        text-align: center;
    }
  
    @media (max-width: 768px) {
        .splash {
            max-width: 100%;
            padding: 0 1rem;
        }
  
        .face {
            width: 150px;
            height: 150px;
        }
  
        .page-title {
            font-size: 1.2rem;
        }
  
        .button {
            left: 5%;
        }
    }
  </style>
  