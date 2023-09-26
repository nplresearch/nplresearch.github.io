<script>
  import {
    ArrowRight,
    ArrowLeft,
    Link,
    FileText,
    Code2,
    Github,
  } from "lucide-svelte";
  export let name;
</script>

{#if name === "arrow right"}
  <svelte:component this={ArrowRight} {...$$props} />
{:else if name === "arrow left"}
  <svelte:component this={ArrowLeft} {...$$props} />
{:else if name === "link"}
  <svelte:component this={Link} {...$$props} />
{:else if name === "pdf"}
  <svelte:component this={FileText} {...$$props} />
{:else if name === "bib"}
  <svelte:component this={Code2} {...$$props} />
{:else if name === "code"}
  <svelte:component this={Github} {...$$props} />
{:else}
  <svelte:component this={Link} {...$$props} />
{/if}
