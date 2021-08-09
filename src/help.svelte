<script>
import {addHZ} from "./store.js"
const setTofind=evt=>{
	addHZ(evt.target.innerText,'tofind',-1);
}

</script>
<div>
    <hr/>
构件过滤条件：笔划数首次笔形。
    <br/>可输入多于一个构件。
    <br/><span class="box" on:click={setTofind}>木口</span>表示“木”先出现，
    <br/>若要“口”先出现，则<span class="box"  on:click={setTofind}>口木</span>
    <br/><span class="box"  on:click={setTofind}>又又</span>再点“双”得“叒”及“叕”。
    <br/>粗体字是构件，点大字复制到剪贴板。
</div>

<style>
    .box {border:1px solid gray}
</style>
