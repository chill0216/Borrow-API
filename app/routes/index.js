const itemRoutes = require('./item-routes')

module.exports = function (app, db) {
    itemRoutes(app, db)
}
