<script>
    import {breedOf,breedCount} from "hanziyin"
    import { onMount } from "svelte";
    import HZButton from "./hzbutton.svelte"
    import { addHZ } from "./store";
    export let tf,idx;
    const MAXITEM=100;
    let res=[],breed=[],remaining=0,shown=0;

    const CP=cp=>String.fromCodePoint(cp);
    const showBreed=()=>{
        res=breedOf(tf,'breedcount').map(CP);
        remaining=0;
        if (res.length>MAXITEM) {
            remaining=res.length-100;
            breed=res.slice(0,100);
            shown=MAXITEM;
        } else breed=res;
        
    }
    onMount( showBreed)
    const click=(newhz)=>{
        addHZ( newhz,tf.join(),idx);
    };
    const showmore=()=>{
    if (remaining==0) return;
    if (remaining>MAXITEM) {
        breed=breed.concat(res.slice(shown,shown+MAXITEM));
        shown+=MAXITEM;
        remaining-=MAXITEM;
    } else {
        breed=res;
        shown=res.length;
        remaining=0;
    }
}
</script>
<div>
    {#each breed as HZ}
     <span><HZButton onclick={()=>click(HZ)} hz={HZ}/></span>
    {/each} 
    <span class="more" on:click={showmore}>{remaining?('…'+remaining):''}</span>
</div>

<style>

    .more {cursor:pointer}
    .more:hover{border-bottom:blue 1px solid}
</style>