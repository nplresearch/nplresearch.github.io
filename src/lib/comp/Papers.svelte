<script>
    export let project = "all"; 
    export let person = "all";
    let selected=null;
    let selected_topic=null;
    import Paper from "./Paper.svelte";
    import {papers} from "../scripts/store.js";
    import {projects} from "../scripts/store.js";
    let open=false;

    function filterPapers(papers, person, project) {
      const filteredPapers = [];

      for (const paper of papers) {
        const personMatch = person === 'all' || paper.people.includes(person);
        const projectMatch = project === 'all' || paper.projects.includes(project);

        if (personMatch && projectMatch) {
          filteredPapers.push(paper);
        }
      }
      return filteredPapers;
    };
    function selectProject(i){
        if (selected_topic===i){
            selected_topic=null
            project = "all"
        }else{
            selected_topic = i;
            project = $projects[i].tag
        }
        open = false
        selected=null;
    };
    function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

    $: filtered_papers = filterPapers($papers,person,project);
    </script>

<!-- <div class="topics"> -->
<!--     {#each $projects as project,i} -->
<!--         <div on:mousedown={()=>selectProject(i)} -->
<!--             class:selected={selected_topic===i}  -->
<!--             class="topic"> -->
<!--             {project.title} -->
<!--         </div> -->
<!--     {/each} -->
<!-- </div> -->


<div class="topics-dd" on:click={()=>open=true}>
    <div class="label">
        <!-- //dont do this just all all as an option -->
        {project.title ? project.title : capitalize(project)}
    </div>
    {#if open}
    <div class="dropdown">
        {#each $projects as project,i}
            <div on:mousedown={()=>selectProject(i)}
                class:selected={selected_topic===i} 
                class="topic">
                {project.title}
            </div>
        {/each}
    </div>
    {/if}
</div>

<div class="papers">
{#each filtered_papers as publication, i}
    <div
        on:mousedown={()=>{
            if (selected===i){
                selected=null
            }else{
                selected = i;
            }
        }}
        class="row">
        <Paper {...publication} open={selected===i}/>
    </div>
{/each}
</div>

<style>
    .topics{
        display: flex;
        flex-direction: row;
        margin-top:1rem;
        border-radius: 0.375rem;
        background-color: #ffffff;
        cursor: pointer;
        padding:0.375rem;
        box-shadow: var(--base-shadow);
        border: 1px solid var(--clr-lowlight1);
    }
    .topics .topic:not(:last-child) {
        padding-right:0.375rem;
        margin-right:0.375rem;
        border-right: 1px solid var(--clr-lowlight1);
    }
    .topics-dd{
        position:relative;
        background-color: #ffffff;
        cursor: pointer;
        padding:0.375rem;
        box-shadow: var(--base-shadow);
        border: 1px solid var(--clr-lowlight1);
        border-radius: 0.375rem;
    }
    .topic{
        cursor:pointer;
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1rem;
        font-weight: 500;
        color: var(--clr-lowlight2);
    }
    .dropdown{
        position:absolute;
        top:10;
        left:0;
        display: flex;
        flex-direction: column;
        margin-top:1rem;
        border-radius: 0.375rem;
        background-color: #ffffff;
        cursor: pointer;
        padding:0.375rem;
        box-shadow: var(--base-shadow);
        border: 1px solid var(--clr-lowlight1);
    }
    .label{
        cursor:pointer;
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1rem;
        font-weight: 500;
        color: var(--clr-lowlight2);
    }
    .selected{
        /* background-color:var(--clr-mixred); */
        font-weight:800;
        color: var(--text3);
    }
    .papers{
        width:90%;
    }
    .row{
        width:100%;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid var(--clr-lowlight1);
        padding:0.4rem;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .row:hover{
        background-color:rgba(0,0,0,0.1)
    }
</style>
