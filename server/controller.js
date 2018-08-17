module.exports = {
    getAll: (req, res, next) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then( response => res.status
        (200).send(response) )
        .catch( err => {
            res.status(500).send({
            errorMessage: " Sorry bud it aint workin today"})
            console.log(err)
        }) 
    },

    create: (req, res) => {
        const db = req.app.get('db').
         create_product([req.body.id, req.body.name, req.body.address, req.body.city, req.body.state, req.body.zipcode]).then ( () => {
             res.status(200).send("You bet your bunz its posted")
         })
    },

    delete: ( req, res, next) => {
        const db = req.app.get('db')
        const { params } = req

        db.delete_product(params.req) 
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "defs not working.."})
            console.log(err)
        })
    },
  getOne: (req, res) => {
    const db = req.app.get('db');
    const { params } = req;

    db.get_inventories(params.id)
    .then( (response) => res.status(200).send(response) )
    .catch( err => {
        res.status(500).send({errorMessage: "Nooooooooooooope"})
        console.log(err)
    })

    }
}