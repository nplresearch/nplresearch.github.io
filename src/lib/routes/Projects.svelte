<script>
  import { projects } from "../scripts/store.js";
</script>

{#each $projects as project}
    <div class="title">{project.title}</div>
    <div class="description">{project.description}</div>
{/each}
