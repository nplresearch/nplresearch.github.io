<script>
  export let title;
  export let authors;
  export let links;
  export let abstract;
  export let side = 0;
  import Button from "./Button.svelte";
  import PdfComponent from "./PDFComponent.svelte";

  function cropString(str, N) {
  if (str.length > N) {
    return str.slice(0, N) + "...";
  } else {
    return str;
  }
}

</script>

<div class="publication" class:reversed={side === 1}>
  <div class="image">
    <PdfComponent url={links[0].pdf} title={title} />
  </div>
  <div class="text">
    <div class="paper-title">
      {title}
    </div>
    <div class="description">
      {cropString(abstract,420)}
    </div>
    <div class="paper-title buttons">
      {#each authors as author}
        <div class="name">{author},</div>
      {/each}
    </div>
    <div class="buttons">
      {#if links.length > 0}
        {#each Object.entries(links[0]) as [name, url]}
          <Button
            icon_place="left"
            icon={name}
            text={name}
            href={url}
            reduced={true}
          />
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .image {
    --base: 10rem;
    cursor: pointer;
    width: var(--base);
    height: calc(var(--base) * 1.414213);
    flex-shrink: 0;
    border-radius: 0.5rem;
    outline: 0px var(--clr-mixred) solid;
    transition: all 0.3s ease-out;
  }

  .text {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    max-width: 60ch;
  }
  .image:hover {
    outline: 4px var(--clr-mixred) solid;
  }

  .publication {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem 1rem 4rem;
  }

  .reversed {
    flex-direction: row-reverse;
  }

  .paper-title {
    margin-left: 1rem;
    font-family: "Noto Sans TC", sans-serif;
    color: rgba(255, 255, 255, 0.9);
  }

  .description {
    margin: 0.2rem;
    margin-left: 1rem;
  }

  .name {
    margin: 0 0.5rem 0.2rem 0;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>
