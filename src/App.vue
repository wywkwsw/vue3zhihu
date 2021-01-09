<template>
  <div id="app1">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <ul>
      <li v-for="(item,index) in numbers" :key="index">{{item}}</li>
    </ul>
    <h1>{{person.name}}</h1>
    <h1>{{title}}</h1>
    <button @click="increase">按钮</button>\
    <button @click="changeTitle">按钮标题</button>
    <h1>x:{{x}}</h1>
    <h1>y:{{y}}</h1>
    <h1>{{result}}{{loading}},{{loaded}},{{error}}</h1>
    <!-- 异步组件渲染 -->
    <div>
    <Suspense>
      <template #default>
        <div>
          <AsuncShow></AsuncShow>
          <DowShow></DowShow>   
          </div>   
      </template>
      <template #fallback>
        <h1>Loading!...</h1>
      </template>
    </Suspense>
    <p>{{errInfo}}</p>
    </div>
  </div>
  <!-- <router-view/> -->
</template>
<script lang="ts">
import {ref,computed,reactive,toRefs,watch,onMounted,onUnmounted,onErrorCaptured} from 'vue'
import useMousePosition from "./hooks/useMousePosition"
import useURLLoader from "./hooks/useURLLoader"
import AsuncShow from "./views/AsyncShow.vue"
import DowShow from "./views/DogShow.vue"
interface Dataprops{
  count:number;
  double:number;
  increase:()=>void;
  numbers:number[];
  person:{name?:string};
}
interface dogType{
  message:string;
  status:string
}
interface catType{
  id:string;
  url:string;
  width:number;
  height:number;
  // [index:number]:number;
  breeds:any []
}
export default {
  name:'App',
  components:{
    AsuncShow,
    DowShow
  },
  setup(){
    // const count = ref(0)
    // const increase = ()=>{
    //   count.value++
    // }
    // const double = computed(()=>{
    //   return count.value*2
    // })
    // onMounted(()=>{
    //   console.log('mount')
    // })
    // onUpdated(()=>{
    //   console.log("onUpdated")
    // })
    // onRenderTriggered((event)=>{
    //   console.log('event',event.);      
    // })
    //捕捉异步错误
    const errInfo = ref(null)
    onErrorCaptured((err:any)=>{
      errInfo.value = err
      return true
    })
    const data:Dataprops= reactive({
      count:0,
      double: computed(()=> data.count*2),
      increase:()=>{data.count++},
      numbers:[1,2,3],
      person:{}
    })
    const title = ref('')
    const changeTitle=()=>{
      title.value+='hellow'
      // document.title = title.value
    }

    const {toXY} = useMousePosition()
    // const x = ref(0)
    // const y = ref(0)
    // const updataMouse = (e:MouseEvent)=>{
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }
    // onMounted(()=>{
    //   document.addEventListener('click',updataMouse)
    // })
    // onUnmounted(()=>{
    //   document.removeEventListener('click',updataMouse)
    // })
    const {result,loading,loaded,error}=useURLLoader<catType[]>('https://api.thecatapi.com/v1/images/search?limit=1')//useURLLoader<dogType>('https://dog.ceo/api/breeds/image/random')
    watch(result,()=>{
      if(result.value){
        console.log('value',result.value[0].url);
        
      }
    })
    watch([title,()=> data.count],(newvalue,oldvalue)=> {
      console.log('newvalue,oldvalue',newvalue,oldvalue)
    })
    data.numbers[0] = 5
    data.person.name="yang"
    const torefs = toRefs(data)
    return { 
      ...torefs,
      title,
      changeTitle,
      ...toXY,
      result,loading,loaded,error,
      errInfo
      // x,
      // y
      // ...data
      // count,
      // increase,
      // double
    }
  }
}
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
