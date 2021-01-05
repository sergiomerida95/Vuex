Vue.component('padre',{
    template: `
    <div class="p-5 bg-dark text-white">
        <h1>Componente padre: {{numeroPadre}}</h1>
        
        <hijo  :numero=numeroPadre @nombreHijo="nombreHijo = $event"></hijo>
        <h2>Nombre recibido: {{nombreHijo}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        
    </div>
   
    `,
    data(){
        return{
            numeroPadre: 0,
            nombreHijo: ''
        }
    }
    
});