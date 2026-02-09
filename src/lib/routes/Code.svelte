<script>
    import { onMount } from "svelte";
    import { repos } from "../scripts/store.js";
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { Github, Star, GitFork } from "lucide-svelte";

    let repoData = $repos.map(r => ({ ...r, stars: null, forks: null, language: null }));

    const languageColors = {
        "Python": "#3572A5",
        "JavaScript": "#f1e05a",
        "TypeScript": "#3178c6",
        "Jupyter Notebook": "#DA5B0B",
        "C++": "#f34b7d",
        "C": "#555555",
        "R": "#198CE7",
        "Julia": "#a270ba",
        "MATLAB": "#e16737",
        "HTML": "#e34c26",
    };

    onMount(() => {
        document.body.scrollIntoView();

        const fetches = $repos.map((repo, i) =>
            fetch(`https://api.github.com/repos/${repo.owner}/${repo.repo}`)
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    if (data) {
                        repoData[i] = {
                            ...repoData[i],
                            stars: data.stargazers_count,
                            forks: data.forks_count,
                            language: data.language,
                            description: data.description || repoData[i].description,
                        };
                        repoData = repoData;
                    }
                })
                .catch(() => {})
        );

        Promise.allSettled(fetches);
    });
</script>

<div class="page-title">CODE</div>

<div class="grid">
    {#each repoData as repo, i}
        <a
            href={repo.github}
            target="_blank"
            rel="noopener noreferrer"
            class="card"
            in:fly={{
                y: 20,
                duration: 400,
                easing: quintOut,
                delay: i * 60,
            }}
        >
            <div class="repo-name">{repo.name}</div>
            <div class="description">{repo.description}</div>
            <div class="repo-meta">
                {#if repo.language}
                    <span class="language">
                        <span class="lang-dot" style="background-color: {languageColors[repo.language] || '#888'}"></span>
                        {repo.language}
                    </span>
                {/if}
                {#if repo.stars !== null}
                    <span class="stat">
                        <Star size="14" />
                        {repo.stars}
                    </span>
                {/if}
                {#if repo.forks !== null && repo.forks > 0}
                    <span class="stat">
                        <GitFork size="14" />
                        {repo.forks}
                    </span>
                {/if}
                <span class="stat github-icon">
                    <Github size="14" />
                </span>
            </div>
        </a>
    {/each}
</div>

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

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1rem;
        width: 90%;
        max-width: 900px;
    }

    .card {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        border-radius: 0.375rem;
        background-color: #ffffff;
        box-shadow: var(--base-shadow);
        border: 1px solid var(--clr-lowlight1);
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card:hover {
        border-color: var(--clr-mixred);
    }

    .repo-name {
        font-family: "Noto Sans TC", sans-serif;
        color: var(--text1);
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.1rem;
        margin-bottom: 0.5rem;
    }

    .description {
        font-family: "Helvetica", "Arial", sans-serif;
        color: var(--text3);
        font-weight: 100;
        font-size: 0.8rem;
        line-height: 1.2rem;
        letter-spacing: 0.05rem;
        flex: 1;
        margin-top: 0;
        margin-bottom: 0.75rem;
    }

    .repo-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: "Noto Sans TC", sans-serif;
        font-size: 0.8rem;
        color: var(--clr-lowlight2);
    }

    .language {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }

    .lang-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    .stat {
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }

    .github-icon {
        margin-left: auto;
    }

    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }

        .page-title {
            font-size: 1.2rem;
        }
    }
</style>
