<script>
    import {HZStack} from './store'
    import { scale,slide ,draw,fade,fly} from 'svelte/transition';
    import {flip} from 'svelte/animate'
    import CardView from './cardview.svelte'
    import Help from "./help.svelte"
</script>
<div class="stackview">
    {#if !$HZStack.length}
        <Help/>
    {/if}
    {#each $HZStack as HZ,idx (HZ.tf)}
    <div in:fly={{y:-30}} out:scale animate:flip>
        <CardView tf={HZ.tf} idx={idx} from={HZ.from} />    
    </div>
    {/each}
</div>

<style>

</style>