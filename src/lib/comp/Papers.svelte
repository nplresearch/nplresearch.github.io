<script>
    export let project = "all"; 
    export let person = "all";
    let selected=null;
    let selected_topic=null;
    import Paper from "./Paper.svelte";
    import {papers} from "../scripts/store.js";
    import {projects} from "../scripts/store.js";

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
        selected=null;
    };

    $: filtered_papers = filterPapers($papers,person,project);
    </script>

<div class="topics">
    {#each $projects as project,i}
        <div on:mousedown={()=>selectProject(i)}
            class:selected={selected_topic===i} 
            class="subtitle">
            {project.title + (i<$projects.length-1 ? " | " : "")}
        </div>
    {/each}
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
        width:89%;
        margin-top:1rem;
    }
    .subtitle{
        cursor:pointer;
        margin-left:0.375rem;
        margin-right:0.375rem;
        font-size:0.7rem;
    }
    .selected{
        color:var(--clr-mixred);
        font-weight:800;
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
