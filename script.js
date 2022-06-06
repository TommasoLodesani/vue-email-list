const app = new Vue({
    el : "#app",
    data : {
        email : []
        
    },
    mounted(){

        // richiesta email
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) =>{
                const risultato = result.data.response;
                console.log(risultato);
                this.email.push(risultato);
                console.log(this.email);
                
            })

        }

        
        
    }
})