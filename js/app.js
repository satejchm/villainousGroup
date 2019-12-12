new Vue({
    el: ".villains-wrapper",
    mounted: function(){
        axios.get('data/data.json').then((response) =>{
            this.Villains = response.data.Villains;
        }),

        axios.get('data/data.json').then((response) =>{
            this.FAQ = response.data.FAQ;
        })  
           
    },

    data:{
        Villains:[ ],
        message: "message",
        FAQ: []
    },

    methods:{
        
        hideFate: function(){
            var fateWrapper = document.querySelector(".fateCards");

            if(fateWrapper.style.display === "none"){
            fateWrapper.style.display = "flex";
            fateWrapper.classList.add = "animationShow"
            fateWrapper.classList.remove = "animationHide"
            console.log("I should show")
            }else{
                fateWrapper.style.display = "none";
                fateWrapper.classList.add = "animationHide"
                fateWrapper.classList.remove = "animationShow"
                console.log("I should hide")
            }

        },

        hideVillain: function(){

            var villainWrapper = document.querySelector(".villainCards");
    
            if(villainWrapper.style.display === "none"){
            villainWrapper.style.display = "flex";
            villainWrapper.classList.add = "animationShow"
            villainWrapper.classList.remove = "animationHide"
            
            console.log("I should show")
            }else{
                villainWrapper.style.display = "none";
                villainWrapper.classList.add = "animationHide"
                villainWrapper.classList.remove = "animationShow"
                console.log("I should hide")
            }
    
        }
    }

   
})
