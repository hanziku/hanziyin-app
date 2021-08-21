<script>
    import {cjkBlockName,breedCount} from "hanziyin"

    export let onclick;
    export let hz;
    let hzinfo='U+'+hz.codePointAt(0).toString(16).toUpperCase()+
    ' '+cjkBlockName(hz).toUpperCase();
</script>

<span class={(breedCount(hz)?" withbreed":"")+
" hz cjk-"+cjkBlockName(hz) }

on:click={onclick} title={hzinfo}>{hz}</span>
<!-- 
<span href="." class="tooltip" on:click={onclick}></span>
    {hz}
    <span>{}</span>
</span> -->

<style>
    .hz {cursor:pointer}
    .hz:hover{border-bottom:rgb(105, 105, 255) 1px solid}
    .withbreed {font-weight: bold;}
    .cjk-ext-a {color:hsl(90,80%,35%)}
    .cjk-ext-b {color:hsl(150, 85%, 35%)}
    .cjk-ext-c {color:hsl(180, 85%, 35%)}
    .cjk-ext-d {color:hsl(210, 85%, 35%)}
    .cjk-ext-e {color:hsl(280, 85%, 35%)}
    .cjk-ext-f {color:hsl(380, 85%, 35%)}
    .kangxizidian {border-radius: 5px; border:1px dotted brown}
/*tooltip causing extension char to crush
.tooltip {
  cursor:pointer;
   border-bottom: 1px dashed; 
  text-decoration: none;
 
}
.tooltip:hover {
  position: relative;
  border-bottom: 1px solid; 
}
.tooltip span {
  display: none;
}
.tooltip:hover span {
    border-radius: 0.3em;
  border: #666 2px dotted;
  box-shadow: 3px 3px 3px 1px rgb(143, 143, 143);
  padding: 3px 3px 3px 3px;
  display: block;
  z-index: 100;
  background: #e3e3e3;
  left: 0px;
  margin: 15px;
  position: absolute;
  top: -3em;
  text-decoration: none;
}
*/
</style>