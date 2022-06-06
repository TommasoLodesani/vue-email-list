const app = new Vue({
    el : "#app",
    data : {
        email_uno : 0,
        email_due : 0,
        email_tre : 0,
        email_quattro : 0,
        email_cinque : 0,
        email_sei : 0,
        email_sette : 0,
        email_otto : 0,
        email_nove : 0,
        email_dieci : 0
        
    },
    mounted(){

        // richiesta email
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_uno = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_due = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_tre = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_quattro = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_cinque = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_sei = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_sette = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_otto = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_nove = risultato;

        }),
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) =>{
            const risultato = result.data.response;
            console.log(risultato);
            this.email_dieci = risultato;

        })

    }
})