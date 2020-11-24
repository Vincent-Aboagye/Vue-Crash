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
import {useNumbers } from './numbers'
export default {
    
    setup(){
        //destructuring
      const  {  total,
                count,
                history,
                a,
                b} = useNumbers()
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