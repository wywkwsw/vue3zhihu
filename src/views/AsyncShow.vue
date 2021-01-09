<template>
<div>
<h1>{{result}}</h1>
</div> 
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    setup(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              resolve({result:42})
            },1000)
        })
    }
})
</script>

<style>

</style>