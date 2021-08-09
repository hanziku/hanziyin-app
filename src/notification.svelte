<script>

import {fade} from 'svelte/transition';
import {message} from './store.js'
</script>

{#if $message}
<span  out:fade class="message">{$message}</span>
{/if}

<style>
    .message {color:green}
</style>