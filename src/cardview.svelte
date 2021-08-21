<script>
    import {factorsOf,breedCount,cjkBlockName} from "hanziyin"
    import {kangxiHtml} from "./kangxizidian"
    import BreedView from "./breedview.svelte";
    import {addHZ, removeHZ,notifyUser} from "./store.js"
    export let tf,idx, from;
    const CP=cp=>String.fromCodePoint(cp);
    const close=()=>{
        removeHZ(tf)
    }
    let hasbreed=breedCount(tf[0])>0
    
    const showfactor=factor=>{
        addHZ(factor,tf.join(),idx);
    }
    export const copySelection=evt=>{
        const sel=getSelection();
        const range=document.createRange()
        range.setStart(evt.target,0);
        range.setEnd(evt.target,1);
        sel.removeAllRanges()
        sel.addRange(range);
        document.execCommand('copy')
        sel.removeAllRanges();
    }
    const copyToClipboard=evt=>{
        copySelection(evt) 
        notifyUser("已复制“" + evt.target.innerText+"”");
    }
    const openkangxi=evt=>{
        const hz=parseInt(evt.target.dataset.hz).toString(16).toUpperCase();
        const url='../'+evt.target.dataset.kangxi+'#u'+hz;
        window.open(url);
    }
</script>

<div class="view">
    <span class="btnclose" on:click={close}>⨯</span>
    <span class="factors">
        {#each factorsOf(tf[0]) as factor,idx (idx)}
            {#if from==factor}
            {CP(factor)}
            {:else}
            <span class="factor" on:click={()=>showfactor(factor)}>{CP(factor)}</span>
            {/if}
        {/each}
    </span>
    {#each tf as w,idx (idx)}
    <span on:click={copyToClipboard} class="hz" class:hasbreed>
        {String.fromCodePoint(w)}</span>
        <span>{'U+'+w.toString(16).toUpperCase()}</span>
        <span class="uniblock">{cjkBlockName(w).replace('bmp','').replace('ext-','扩').toUpperCase()}</span>
    
        {#if kangxiHtml(w)}
            <span class="kxlink" on:click={openkangxi} 
            data-hz={w} data-kangxi={kangxiHtml(w)}>康熙字典</span>
        {/if}
    {/each}

    
    <BreedView tf={tf} idx={idx+1}/>
</div>


<style>
    .view {border-top:silver 1px dotted}
    .factors {font-size:90%;color:blueviolet}
    span.btnclose {padding-left:0.5em;height:1em;width:1em;padding-right:0.5em;color:rgba(0,0,0,0.3);cursor:pointer;font-size:120%}
    span.btnclose:hover {color:rgba(255,0,0,1)}
    .hz {font-size:150%;padding-left:3px;
    padding-right:3px;cursor:copy}
    .hasbreed { border-radius: 5px; border:solid 1px blue}
    .factor {border:1px dotted blue;cursor:pointer}
    .kxlink {color:brown;cursor:pointer}
    .kxlink:hover {border-bottom:1px solid brown} 
    .uniblock{color:blue}
</style>