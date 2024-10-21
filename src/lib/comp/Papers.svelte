<script>
    export let selected_project = "All"; 
    export let selected_person = "All";
    export let filter = true;
    let selected=null;
    let selected_topic=null;
    import Paper from "./Paper.svelte";
    import {papers} from "../scripts/store.js";
    import {projects} from "../scripts/store.js";
    import LucideIcon from "./LucideIcon.svelte";
    let open=false;

    function filterPapers(papers, person, project) {
      const filteredPapers = [];

      for (const paper of papers) {
        const personMatch = person === 'All' || (paper.people?.includes(person) ?? false);//handle the undefined case
        const projectMatch = project === 'All' || (paper.projects?.includes(project)??false);

        if (personMatch && projectMatch) {
          filteredPapers.push(paper);
        }
      }
      return filteredPapers;
    };
    function selectProject(i){
        if (selected_topic===i){
            selected_topic=null
            selected_project = "All"
        }else{
            selected_topic = i;
            selected_project = $projects[i].tag
        }
        open = false
        selected=null;
    };

    $: filtered_papers = filterPapers($papers,selected_person,selected_project);
    </script>

{#if filter}
<div class="filter">
<div class="subtitle">Filter by project</div>
    <div class="topics-dd" on:click={()=>open=!open}>
        <div class="label">
            <div>
                {selected_project==="All"?"All":$projects[selected_topic].title}
            </div>
            <div style="display:grid;place-items:center;">
                <LucideIcon name={'dropdown'}/>
            </div>
        </div>
        {#if open}
            <div class="dropdown">
                <div on:mousedown={()=>{
                    selected_topic=null;
                    selected_project="All";
                }}
                    class:selected={selected_project==="All"} 
                    class="topic">
                    <div style="flex:15%;display:grid;place-items:center;">
                        {#if selected_project==="All"}
                            <LucideIcon name={'tick'}/>
                        {/if}
                    </div>
                    <div style="flex:85%">
                        {"All"}
                    </div>
                </div>
                {#each $projects as project,i}
                    <div on:mousedown={()=>selectProject(i)}
                        class:selected={selected_topic===i} 
                        class="topic">
                        <div style="flex:15%;display:grid;place-items:center;">
                            {#if selected_topic===i}
                                <LucideIcon name={'tick'}/>
                            {/if}
                        </div>
                        <div style="flex:85%">
                            {project.title}
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
{/if}

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
    .filter{
        width:89%;
        margin-bottom:0.5rem;
    }
    .subtitle{
    margin:0.2rem;
    font-size:0.7rem;
    color:var(--clr-lowlight2);
    }
    .topics-dd{
        position:relative;
        background-color: #ffffff;
        width: 30ch;
        cursor: pointer;
        padding:0.375rem;
        box-shadow: var(--base-shadow);
        border: 1px solid var(--clr-lowlight1);
        border-radius: 0.375rem;
    }
    .topic{
        display: flex;
        flex-direction:row;
        justify-content:center;
        align-items:flex-start;
        cursor:pointer;
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1rem;
        font-weight: 100;
        color: var(--text3);
        padding:0.2rem 0 0.2rem 0;
        /* transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); */
    }
    .topic:hover{
        background-color:rgba(132, 31, 55,0.3);
        color:var(--clr-mixred);
    }
    .dropdown{
        position:absolute;
        top:10;
        left:0;
        width: 30ch;
        display: flex;
        padding:0.375rem 0 0.374rem 0;
        flex-direction: column;
        margin-top:1rem;
        border-radius: 0.375rem;
        background-color: #ffffff;
        cursor: pointer;
        box-shadow: var(--base-shadow);
        border: 1px solid var(--clr-lowlight1);
    }
    .label{
        cursor:pointer;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1rem;
        font-weight: 100;
        color: var(--text3);
    }
    .selected{
        /* background-color:var(--clr-mixred); */
        font-weight:800;
        /* color: var(--text3); */
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
