<template>
   <div>
   <button @click="count++">{{count}}</button>
   <button @click="a++">{{a}}</button>
   <button @click="b++">{{b}}</button>
   <div v-for="msg in history">
       {{msg}}
   </div>
   </div>
</template>
<script>
import {ref, reactive, computed, watch, watchEffect } from 'vue'
export default {
    
    setup(){
        const count = ref(0)
        const a = ref(0)
        const b = ref(0)
        const history = ref([])
   
    //using watch effect
    watchEffect(()=>{
        console.log(a.value, b.value)
    })

    //using watch
    watch([a,b], ([newA, newB], [oldA, oldB])=>{
        if(newA !== oldA){
            history.value.push(`a: ${oldA} => ${newA}`)
        }
        if(newB !== oldB){
            history.value.push(`b: ${oldB} => ${newB}`)
        }
    })
        const total = computed( ()=> count.value + a.value + b.value )
        return{
            total,
            count,
            history,
            a,
            b
        }
    }
}
</script>