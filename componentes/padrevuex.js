Vue.component('padrevuex',{
    template: `
    <div class="p-5 bg-dark text-white">
        <h1>numero: {{numeroMap}}</h1>
        <hijovuex></hijovuex>
        
        
    </div>
   
    `,
    data(){
        return{
         
        }
    },
    computed:{
        ...Vuex.mapState(['numeroMap'])
    },
    
});