<template>
  <div class="container">
    112233
    <ColumnList :list="list"></ColumnList>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import ColumnList,{ColumnProps} from "./components/ColumnList.vue"
const testDate:ColumnProps[] = [
  {
    id:1,
    title:"test1的专栏",
    avatar:"",
    description:"这是test1的专栏，有一段非常有意思的简介"
  },
  {
    id:2,
    title:"test2的专栏",
    avatar:"",
    description:"这是test2的专栏，有一段非常有意思的简介"
  }
]
export default defineComponent({
  name:"vue",
  components:{
    ColumnList
  },
  setup(){
    return{
      list:testDate
    }
  }
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
