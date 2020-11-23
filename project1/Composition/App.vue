<template>
   <div>
   <button @click="increment">{{count}}</button>
   <button @click="increase('a')">{{numbers.a}}</button>
   <button @click="increase('b')">{{numbers.b}}</button>
   {{total}}
   </div>
</template>
<script>
import {ref, reactive, computed, watch, watchEffect } from 'vue'
export default {
    
    setup(){
        const count = ref(0)
        const numbers = reactive({
            a: 0,
            b: 0
        })

        const increase = (num) => {
            numbers[num] += 1
        }

        const increment = ()=>{
            count.value += 1
        }

        

        const total = computed( ()=> count.value + numbers.a + numbers.b )
        return{
            total,
            increase,
            increment,
            count,
            numbers
        }
    }
}
</script>