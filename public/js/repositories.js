const totalRespositories = document.querySelector(".quantity-projects span");



const API = fetch("https://api.github.com/users/wevdiaz/repos").then( (response) => {
   return response.text();
})
.then((repositories) => {
    const dados = JSON.parse(repositories);

    console.log(dados[0]);
    totalRespositories.textContent = dados.length;
})
.catch((err) => console.log(err))