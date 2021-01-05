Vue.component('hijo',{
    template: `
    <div class="py-5 bg-success text-white">
        <h4>Componente hijo: {{numero}}</h4>
        <h5>Nombre: {{nombre}}</h5>
    </div>
   
    `,
    data(){
        return{
            nombre: 'Sergio'
        }
    },
    props:['numero'],
    mounted(){
        this.$emit('nombreHijo',this.nombre);
    }
    
});