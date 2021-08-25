<script>
import HanziyinPicker from "./hzypicker.svelte"
import StackView from "./stackview.svelte"
import Notification from "./notification.svelte"
import QuickInput from "./quickinput.svelte"
import { addHZ } from "./store";
import {getPWADisplayMode,registerServiceWorker} from 'kaigua'

registerServiceWorker();

const setTofind=()=>{
	addHZ('漢','tofind',-1);
}

</script>
<div class="main">
	<span class="title" on:click={setTofind}>汉字引</span>
	<QuickInput/><Notification/>

	<HanziyinPicker/>
	<StackView/>

</div>
<style>
	.main {margin:0.5em;font-size:145%}
	.title {font-size:150%}
</style>