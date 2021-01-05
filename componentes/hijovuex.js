Vue.component('hijovuex',{
    template: `
    <div class="p-5 bg-dark text-white">
        <h4>Componente hijo: {{numeroMap}}</h4>
        <div class="mb-3">
        <button class="btn btn-danger" @click="aumentarNumero">+</button>
        <button class="btn btn-success" @click="disminuirNumero(2)">-</button>
        <button class="btn btn-warning" @click="obtenerCursos">Obtener cursos</button>
        <button class="btn btn-danger" @click="borrarCursos">Borrar cursos</button>
        </div>
        <ul  v-for="curso in cursos">
            <li >{{curso.nombre}}</li>
        </ul>
        
        
    </div>
   
    `,
    data(){
        return{
         
        }
    },
    computed:{
        ...Vuex.mapState(['numeroMap','cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentarNumero','disminuirNumero','borrarCursos']),
        ...Vuex.mapActions(['obtenerCursos'])
    }
    
});