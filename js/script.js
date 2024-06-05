// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
// }

// xhttp.open('GET', 'https://flynn.boolean.careers/exercises/api/random/mail') 
// xhttp.send();

const { createApp } = Vue

createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        getData() {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) =>{
                        this.emails.push(response.data.response);   
                    })
                }, 3000);
                
            }

        }
    },
    created() {
        this.getData();
    }
}).mount('#app')