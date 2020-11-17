import {createApp} from 'vue/dist/vue.esm-browser.js';

const Num = {
    props: {
        number:{
            type: Number,
            required: true
        }
    },
    template: `
        <button :class="getClass(number)" @click="clickHandler">
        {{number}}
        </button>
       
    `,
    methods: {
        getClass(number){
            if(this.isEven(number)){
                return 'red'
            }
            return 'blue'
        },
        isEven(num){
            return num % 2 === 0
        },

        clickHandler(){
            this.$emit('chosen',{number: this.number})
        }
    }
}
const app = createApp({
    components: {
        Num
    },
    template: `
        <Num v-for="number in numbers" :number="number" @chosen="updateClicked" />
        <h3>Clicked Numbers</h3> 
        <Num v-for="number in clicked" :number="number" />
    `,
    data(){
        return{ 
           numbers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
           clicked: []
            }
        },
    computed:{

        evenList(){
            return this.numbers.filter((number) => {
                return this.isEven(number)
            })
            
        },
        err(){
            if (this.value.length < 7){
                return 'Too Short'
            }
        },
    },
    methods: {
        // input($evt){
        //     this.value = $evt.target.value
        // };
        updateClicked(pay){
            this.clicked.push(pay.number)
        }

    }    
    
}).mount('#app')
