<script>
import {minStroke,maxStroke,firstStrokeType,secondStrokeType,addHZ,
    MaxStrokeCount} from './store.js'
import {findFactor} from "hanziyin"
import HZButton from "./hzbutton.svelte"
let remaining=0,shown=0;
const MAXITEM=30;
let res=[];
// const factorarraylen=typeof window.hanziyin;//.factorArray.length;
const listfactor=(t1,t2,s,e)=>{
    const minstk=Math.round(s*MaxStrokeCount);
    let maxstk=Math.round(e*MaxStrokeCount);
    if (maxstk==MaxStrokeCount) maxstk=64;
    let arr=[];
    res=findFactor(t1,t2,minstk,maxstk);
    remaining=0;
    if (res.length>MAXITEM){
        remaining=res.length-MAXITEM;
        arr=res.slice(0,MAXITEM);
        shown=MAXITEM;
    } else {
        shown=arr.length;
    }
    return arr;
}
const showmore=()=>{
    if (remaining==0) return;
    if (remaining>MAXITEM) {
        factors=factors.concat(res.slice(shown,shown+MAXITEM));
        shown+=MAXITEM;
        remaining-=MAXITEM;
    } else {
        factors=res;
        shown=res.length;
        remaining=0;
    }
}
const add=factor=>{
    addHZ(factor,'factorlist',-1);
}
let factors=[];

$: factors=listfactor($firstStrokeType,$secondStrokeType, $minStroke, $maxStroke );
</script>
<div>
    {#each factors as factor (factor)}
    <HZButton hz={String.fromCodePoint(factor)} onclick={()=>add(factor)}/>
    {/each}
    <span class="more" on:click={showmore}>{remaining?('…'+remaining):''}</span>
</div>

<style>
    .more {cursor:pointer}
    .more:hover{border-bottom:blue 1px solid}
</style>