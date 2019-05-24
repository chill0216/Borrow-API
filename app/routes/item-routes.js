module.exports = function (app, db) {
    app.post('/add-item', (req, res) => {
        console.log(req.body)
        res.send('hello')
    })

    app.post('/donate-item'), (req, res) => {

        res.send('hello')
    }
}
