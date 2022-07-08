
const API = fetch("https://api.github.com/users/wevdiaz/repos").then( (response) => {
   return response.text();
})
.then((repositories) => {
    const dados = JSON.parse(repositories);

    console.log(dados[0]);
})
.catch((err) => console.log(err))