const orm = require('../config/orm');

const burger = {
    viewBurgers: function (cb) {
        orm.selectAll(result => {
            console.log(result);
            // cb(result);
        });
    },

    addBurger: function () {

    },

    devourBurger: function () {

    }
}

module.exports = burger;