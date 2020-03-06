const connection = require('./connection');

const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: function (burgerName, cb) {
        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)`;
        connection.query(queryString, burgerName, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function (id, cb) {
        let queryString = `UPDATE burgers SET devoured = FALSE WHERE id = ?`;
        connection.query(queryString, id, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
}

module.exports = orm;