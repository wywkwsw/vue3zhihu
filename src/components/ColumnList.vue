<template>
  
</template>

<script lang="ts">
import {defineComponent,PropType} from "vue"
export interface ColumProps{
    id:number;
    title:string;
    avatar:string;
    description:string;
}
export default defineComponent({
    name:'ColumnList',
    props:{
        list:{
            type:Array as PropType<ColumProps[]>,
            required:true
        }
    },
    setup(props,context){
        
    }
})
</script>

<style>

</style>