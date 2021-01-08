import {ref,onMounted,onUnmounted,reactive,toRefs} from 'vue'
function useMousePosition(){
    // const x = ref(0)
    // const y = ref(0)
    const setXY = reactive({
        x:0,
        y:0
    })
    const updataMouse = (e:MouseEvent)=>{
        setXY.x = e.pageX
        setXY.y = e.pageY
    }
    onMounted(()=>{
      document.addEventListener('click',updataMouse)
    })
    onUnmounted(()=>{
      document.removeEventListener('click',updataMouse)
    })
    const toXY = toRefs(setXY)
    return{toXY}
}
export default useMousePosition