<script>
    import { marked } from "marked";
    import { onMount } from "svelte";

    document.body.scrollIntoView();

    let content = "";
    let loading = true;

    onMount(async () => {
        const res = await fetch("/static/manual.md");
        const md = await res.text();
        content = marked(md);
        loading = false;
    });
</script>

<div class="top-row">
    <div class="page-title">Lab Manual</div>
</div>

<div class="manual-container">
    {#if loading}
        <p class="loading">Loading…</p>
    {:else}
        <div class="manual-body">
            {@html content}
        </div>
    {/if}
</div>

<style>
    .top-row {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .page-title {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 1.4rem;
        font-weight: 100;
        margin: 0;
        padding: 0;
        text-align: center;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
        color: var(--text1);
        margin-bottom: 2rem;
    }

    .manual-container {
        width: 800px;
        max-width: 800px;
    }

    .loading {
        text-align: center;
        color: var(--clr-lowlight2);
    }

    /* ── Markdown rendered content ── */

    .manual-body {
        font-family: "Helvetica", "Arial", sans-serif;
        color: var(--text3);
        font-size: 0.95rem;
        line-height: 1.7;
        letter-spacing: 0.02rem;
    }

    .manual-body :global(h1) {
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--text1);
        letter-spacing: 0.1rem;
        margin-bottom: 0.25rem;
    }

    .manual-body :global(h2) {
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--text1);
        letter-spacing: 0.08rem;
        margin-top: 2.5rem;
        margin-bottom: 0.75rem;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid var(--clr-lowlight1);
    }

    .manual-body :global(h3) {
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.05rem;
        font-weight: 500;
        color: var(--text1);
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .manual-body :global(p) {
        margin-bottom: 1rem;
    }

    .manual-body :global(ul),
    .manual-body :global(ol) {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }

    .manual-body :global(li) {
        margin-bottom: 0.4rem;
    }

    .manual-body :global(strong) {
        color: var(--text1);
        font-weight: 600;
    }

    .manual-body :global(em) {
        color: var(--clr-lowlight2);
    }

    .manual-body :global(hr) {
        border: none;
        border-top: 1px solid var(--clr-lowlight1);
        margin: 2rem 0;
    }

    .manual-body :global(a) {
        color: var(--clr-mixred);
        text-decoration: none;
    }

    .manual-body :global(a:hover) {
        text-decoration: underline;
    }

    .manual-body :global(blockquote) {
        border-left: 3px solid var(--clr-mixred);
        padding-left: 1rem;
        margin: 1rem 0;
        color: var(--clr-lowlight2);
        font-style: italic;
    }

    /* ── Responsive ── */

    @media screen and (max-width: 1024px) {
        .manual-container {
            width: 89%;
        }
    }

    @media screen and (max-width: 768px) {
        .page-title {
            font-size: 1.1rem;
            letter-spacing: 0.2rem;
            margin-bottom: 1rem;
        }

        .manual-body {
            font-size: 0.9rem;
        }

        .manual-body :global(h1) {
            font-size: 1.3rem;
        }

        .manual-body :global(h2) {
            font-size: 1.1rem;
        }
    }
</style>
