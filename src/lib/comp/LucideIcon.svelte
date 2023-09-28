<script>
  import {
    ArrowRight,
    ArrowLeft,
    Link,
    FileText,
    Code2,
    Github,
    Home,
    Menu,
    X,
    ChevronsUpDown,
    Check,
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
{:else if name === "home"}
  <svelte:component this={Home} {...$$props} />
{:else if name === "menu"}
  <svelte:component this={Menu} {...$$props} />
{:else if name === "close"}
  <svelte:component this={X} {...$$props} />
{:else if name === "dropdown"}
  <svelte:component this={ChevronsUpDown} {...$$props} />
{:else if name === "tick"}
  <svelte:component this={Check} {...$$props} />
{:else}
  <svelte:component this={Link} {...$$props} />
{/if}
