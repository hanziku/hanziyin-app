<script>
    import DoubleRangeSlider from './double-range-slider.svelte';
    import StrokeTypeSelector from './stroketyp.svelte';
    import {minStroke,maxStroke,firstStrokeType,secondStrokeType,
        MaxStrokeCount} from './store.js'

</script>
<div class="criteria">
    <DoubleRangeSlider range={MaxStrokeCount} bind:start={$minStroke} bind:end={$maxStroke}/>
    <span class="strokeselector">
        <StrokeTypeSelector bind:selected={$firstStrokeType}/>
    </span>
    <span class="strokeselector ss2">
        <StrokeTypeSelector bind:selected={$secondStrokeType}/>
    </span>
     

</div>

<style>
    .criteria { max-width:22rem;padding-left:0.2em}
    .strokeselector { padding-left:0.3em;padding-right:0.1em;}
    .ss2 {border-left:4px solid silver}
</style>