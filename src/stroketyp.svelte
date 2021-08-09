<script>
    export let selected=0;
    const choose=n=>{
        if (selected==n) selected=0;
        else selected=n;
    }
</script>

<span class="stroke-type-selector">
    <span class="btnstroke" on:click={()=>choose(1)} class:selected={selected==1}>一</span>
    <span class="btnstroke" on:click={()=>choose(2)} class:selected={selected==2}>丿</span>
    <span class="btnstroke" on:click={()=>choose(3)} class:selected={selected==3}>丨</span>
    <span class="btnstroke" on:click={()=>choose(4)} class:selected={selected==4}>丶</span>
    <span class="btnstroke" on:click={()=>choose(5)} class:selected={selected==5}>㇇</span>
    <span class="btnstroke" on:click={()=>choose(6)} class:selected={selected==6} >乚</span>
</span>

<style>
    .btnstroke{cursor:pointer;
        padding:2px;
        font-size:80%
    }
    .selected {
        color:black;
        background:#34a1ff;
        border-radius: 0.5em;
    }

    .stroke-type-selector {
        max-width:8em;
        margin: 0 -4px;
        box-sizing:border-box;
        -webkit-user-select: none;
    }
    
</style>