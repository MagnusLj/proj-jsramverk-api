var express = require('express');
var router = express.Router();
// var app = express();

const stuff = require("../models/stuff.js");

// router.get('/', function(req, res, next) {
//     const data = {
//         data: {
//             msg: stuff.getDescription(res, req)
//         }
//     };
//
//     res.json(data);
// });

router.get('/', (req, res) => stuff.getDescription(res, req));

//
// module.exports = router;

// app.get("/", (req, res) => {
//     const data = {
//         data: {
//             msg: req.params.msg
//         }
//     };
//
//     res.json(data);
// });

// router.get('/', (req, res) => stuff.getDescription(res, req));

module.exports = router;
