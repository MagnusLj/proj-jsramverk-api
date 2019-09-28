var sqlite3 = require('sqlite3').verbose();

module.exports = (function () {
    if (process.env.NODE_ENV === 'test') {
        console.log("Test");
        return new sqlite3.Database('./db/test.sqlite');
    }
    console.log("texts");
    return new sqlite3.Database('./db/texts.sqlite');
}());
