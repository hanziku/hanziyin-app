<script>
    import { tofind ,addHZ} from "./store";
    import {breedOf} from "hanziyin"
     const addTofindResult=tofind=>{
        if (!tofind)return;
        const r=breedOf(tofind);
        if (!r.length)return;
        addHZ(tofind,'tofind',-1);
    }
$: addTofindResult($tofind);
</script>
<input size="7" placeholder="字或构件" bind:value={$tofind}/>

<style>
    input {margin-left:1em}
</style>