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
        
    }
}