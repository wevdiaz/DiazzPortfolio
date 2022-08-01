
const axios = require("axios").default;

module.exports = {

  home(req, res) {
    return res.render("home");
  },

  about(req, res) {
    return res.render("about");
  },

  portfolio(req, res) {  

    axios({
      baseURL: "https://api.github.com/users/wevdiaz/repos",
    }).then((response) => {
      return response.data;
    }).then((response) => {
      const repositories = response;

      
      return res.render("portfolio", { repositories });
    })
    .catch((err) => console.log(err));      
        
  },

  skill(req, res) {
    return res.render("skills");
  },

  contact(req, res) {
    return res.render("contact");
  }

}