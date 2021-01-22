
const vue=new Vue({
    el:"#add",
    data:{
       viagens:[]

    },
    methods:{
       fetchViagens(){
        fetch('../api/viagens.json')
        .then(r=>r.json())
        .then(r=>{
            this.viagens=r;
        })
       }

    },


    created(){
        this.fetchViagens();
    }
});