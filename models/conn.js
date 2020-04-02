
const pgp = require("pg-promise")({
    query: element => {
        console.log("QUERY:", element.query);
    }
});

const options = {
    host: "localhost",
    database: "reactBlog"
};

const db = pgp(options);

module.exports = db;