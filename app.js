const app = Vue.createApp({
    data(){
        return{
            articulos:[],
            juguetes:[],
            medicamentos:[]
        }
    },
    created(){
        fetch("https://apipetshop.herokuapp.com/api/articulos")
        .then(response => response.json())
        .then(json => {
            this.articulos = json.response;
            this.juguetes = this.filtrarJuguetes();
            this.medicamentos = this.filtrarMedicamentos();
        })
        .catch(err => console.log(err.message))
    },
    methods:{
        filtrarJuguetes(){
            return this.articulos.filter(articulo => articulo.tipo==="Juguete")
        },
        filtrarMedicamentos(){
            return this.articulos.filter(articulo => articulo.tipo==="Medicamento")
        },
    }
})
app.mount("#app");