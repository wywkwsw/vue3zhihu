<template>
  你好
</template>

<script>
import {defineComponent} from "vue"
const component = defineComponent({
    name:'HelloWorld',
    props:{
        msg:{
            type:String,
            default:"你好"
        }
    },
    setup(props,context){
        context.attrs

    }
})
</script>

<style>

</style>