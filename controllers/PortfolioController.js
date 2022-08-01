module.exports = {

  home(req, res) {
    return res.render("home");
  },

  about(req, res) {
    return res.render("about");
  },

  portfolio(req, res) {
    return res.render("portfolio");
  },

  skill(req, res) {
    return res.render("skills");
  },

  contact(req, res) {
    return res.render("contact");
  }

}