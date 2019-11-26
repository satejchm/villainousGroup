new Vue({
    el: ".villains-wrapper",
    mounted: function(){
        axios.get('data/data.json').then((response) =>{
            this.Villains = response.data.Villains;
        })
    },

    data:{
        Villains:[ ]
    },

    methods:{

    }
})