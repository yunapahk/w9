const Animal = require("../../models/animal")

async function create(req, res) {
    const animal = Animal.create(req.body)
    console.log(newAnimal, req.body)
    res.redirect("/animal")
}

module.exports = create
