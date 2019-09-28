const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./db/texts.sqlite');
const db = require("../db/database.js");
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const stuff = {
    // dataFields: "ROWID as id, articleNumber as article_number," +
    //     " productName as name, productDescription as description," +
    //     " productSpecifiers as specifiers, stock, location, (price / 100) as price",

    getDescription: function(res, status=200) {
        db.get("SELECT blahblah FROM stuff WHERE type = 'description_text'",
            (err, rows) => {
                if (err) {
                    // return products.errorResponse(res, "/products", err);
                }

                res.status(200).json( {data: rows} );
            });
    },


    // if (Number.isInteger(parseInt(productId))) {
    //             db.get(



    getReport: function(res, week, status=200) {
        db.get("SELECT blahblah FROM stuff WHERE type = 'report_text' AND kmom = ?", week,
            (err, rows) => {
                if (err) {
                    // return products.errorResponse(res, "/products", err);
                }

                res.status(200).json( {data: rows} );
            });
    },


    // deleteReport: function(res, body) {
    //     db.run("DELETE FROM stuff WHERE kmom = ?",
    //     body.kmom,
    //     function(err) {
    //         if (err) {
    //             return "error";
    //         }
    //         res.status(204).send();
    //     });
    // },


    deleteReport: function(res, body) {
     if (Number.isInteger(parseInt(body.kmom))) {
         db.run("DELETE FROM stuff WHERE kmom = ?",
             body.kmom,
             body.id, (err) => {
                 if (err) {
                     return (err);
                 }

                 res.status(204).json({
                     msg: {
                         status: 204,
                         detail: "Delete request" +
                             " sent."
                     }
                 });
             });
     } else {
         res.status(400).json({
             errors: {
                 status: 400,
                 detail: "Required attribute kmom" +
                     " was not included in the request (deleteReport)."
             }
         });
     }
 },




 addOrEdit: function(res, body) {
  if (Number.isInteger(parseInt(body.kmom))) {
      db.run("INSERT INTO stuff (blahblah, type, kmom)" +
          " VALUES (?, ?, ?)",
          body.blahblah,
          body.type,
          body.kmom,
        (err) => {
              if (err) {
                  return (err);
              }

              res.status(204).json({
                  msg: {
                      status: 204,
                      detail: "POST request" +
                          " sent."
                  }
              });
          });
  } else {
      res.status(400).json({
          errors: {
              status: 400,
              detail: "Required attribute kmom" +
                  " was not included in the request (addOrEdit)."
          }
      });
  }
 },




 checkToken: function (req, res, next) {
     const token = req.headers['x-access-token'];

     jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
         if (err) {
             // send error response
             return res.status(401).json({
                errors: {
                    status: 401,
                    source: req.path,
                    title: "No token",
                    detail: "No token provided in request headers"
                }
            });
         }

         // Valid token send on the request
         next();

        // this.addOrEdit(res, body);

     });
 },


 // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
 //     // spara lösenord i databasen.
 // });

 newUserStorage: function (res, body) {
     // console.log(body.month);
     this.bcryptsome(res, body)
     .then(function(result) {
         return stuff.storeUser(res, body, result)
 })
 .catch(function(err) {
     console.log(err);
 });
},

bcryptsome: function (res, body) {
    let somehash = bcrypt.hash(body.password, saltRounds);
    // console.log(body.year);
    // console.log(somehash);
    // console.log(body.password);
    return somehash;
},



storeUser: function (res, body, result) {
    // let hashisch = bcrypt.hash(body.password, saltRounds);
    //let hashisch = "braja";
        // stuff.register(hash, res, body);

        if (Number.isInteger(parseInt(body.day)) &&
        Number.isInteger(parseInt(body.year))) {
            db.run("INSERT INTO users (name, email, password, day, month, year)" +
                " VALUES (?, ?, ?, ?, ?, ?)",
                body.name,
                body.email,
                result,
                body.day,
                body.month,
                body.year,
              function (err) {
                    if (err)
                    {
                        console.log(result);
                        return stuff.errorResponse(res, "POST/register", err);

                    //     return ("Database error");
                    // }

                    // res.status(204).json({
                    //     msg: {
                    //         status: 204,
                    //         detail: "POST request" +
                    //             " sent.",
                    //         error: err
                    //     }
                    //
                    // });
                }
                res.status(204).json({
                    msg: {
                        status: 204,
                        detail: "POST request" +
                            " sent.",
                        error: err
                    }

                });


                });
        } else {
            res.status(400).json({
                errors: {
                    status: 400,
                    detail: "Required attribute " +
                        " was not included in the request.",
                    name: body.name,
                    hash: hashisch
                }
            });
        }


},





userLogin: function (res, body) {
    // console.log(body.month);
    this.findUser(res, body)
    .then(function(result) {
        return stuff.storeUser(res, body, result)
})
.catch(function(err) {
    console.log(err);
});
},


findUser: function(res, body) {
        console.log("res: ");
        console.log(res);
        const email = body.email;
        const password = body.password;

        if (!email || !password) {
            return res.status(401).json({
                errors: {
                    status: 401,
                    source: "/login",
                    title: "Email or password missing",
                    detail: "Email or password missing in request"
                }
            });
        }

        db.get("SELECT * FROM users WHERE email = ?",
            email,
            (err, rows) => {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "/login",
                            title: "Database error",
                            detail: err.message
                        }
                    });
                }

                if (rows === undefined) {
                    return res.status(401).json({
                        errors: {
                            status: 401,
                            source: "/login",
                            title: "User not found",
                            email: email,
                            detail: "User with provided email not found."
                        }
                    });
                }

                const user = rows;

                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        return res.status(500).json({
                            errors: {
                                status: 500,
                                source: "/login",
                                title: "bcrypt error",
                                detail: "bcrypt error"
                            }
                        });
                    }

                    if (result) {
                        console.log(user.email);

                        let payload = { email: user.email };
                        const secret = process.env.JWT_SECRET;
                        console.log(secret);
                        let token = jwt.sign(payload, secret, { expiresIn: '1h' });

                        return res.json({
                            data: {
                                type: "success",
                                message: "User logged in",
                                user: payload,
                                token: token
                            }
                        });
                    }

                    return res.status(401).json({
                        errors: {
                            status: 401,
                            source: "/login",
                            title: "Wrong password",
                            detail: "Password is incorrect."
                        }
                    });
                });
            });
    },

bcryptCheck: function (res, body) {
    console.log(body);
   let somehash = bcrypt.hash(body.password, saltRounds);

   // console.log(body.year);
   // console.log(somehash);
   // console.log(body.password);
   return somehash;
},




 // register: function(hash, res, body) {
 //  if (Number.isInteger(parseInt(body.day)) &&
 //  Number.isInteger(parseInt(body.year))) {
 //      db.run("INSERT INTO users (name, email, password, day, month, year)" +
 //          " VALUES (?, ?, ?, ?, ?, ?)",
 //          body.name,
 //          body.email,
 //          hash,
 //          body.day,
 //          body.month,
 //          body.year,
 //        (err) => {
 //              if (err) {
 //                  return (err);
 //              }
 //
 //              res.status(204).json({
 //                  msg: {
 //                      status: 204,
 //                      detail: "POST request" +
 //                          " sent."
 //                  }
 //              });
 //          });
 //  } else {
 //      res.status(400).json({
 //          errors: {
 //              status: 400,
 //              detail: "Required attribute " +
 //                  " was not included in the request."
 //          }
 //      });
 //  }
 // },



    // addOrEdit: function(res, body, status=201) {
    //     db.run("INSERT INTO stuff (blahblah, type, kmom)" +
    //         " VALUES ('test', 'report_text', 3)",
    //     // body.blahblah,
    //     // body.type,
    //     // body.kmom,
    //     function(err) {
    //         if (err) {
    //             return (err);
    //         }
    //
    //     });
    // },


    // getAllProducts: function(res, apiKey, status=200) {
    //     db.all("SELECT " + products.dataFields + " FROM products WHERE apiKey = ?",
    //         apiKey, (err, rows) => {
    //             if (err) {
    //                 return products.errorResponse(res, "/products", err);
    //             }
    //
    //             res.status(status).json( { data: rows } );
    //         });
    // }

    // getProduct: function(res, apiKey, productId, status=200) {
    //     if (Number.isInteger(parseInt(productId))) {
    //         db.get(
    //             "SELECT " +
    //             products.dataFields +
    //             " FROM products WHERE apiKey = ? AND ROWID = ?",
    //             apiKey,
    //             productId, (err, row) => {
    //                 if (err) {
    //                     return products.errorResponse(res, "/product/:product_id", err);
    //                 }
    //
    //                 res.status(status).json( { data: row } );
    //             });
    //     } else {
    //         res.status(400).json({
    //             errors: {
    //                 status: 400,
    //                 detail: "Required attribute product id " +
    //                     " is not an integer."
    //             }
    //         });
    //     }
    // },

    // searchProduct: function(res, apiKey, query) {
    //     const searchQuery = "%" + query + "%";
    //
    //     db.all("SELECT " + products.dataFields + " FROM products WHERE apiKey = ? AND" +
    //         " (productName LIKE ? OR productDescription LIKE ?)",
    //     apiKey,
    //     searchQuery,
    //     searchQuery, (err, rows) => {
    //         if (err) {
    //             return products.errorResponse(res, "/product/search/:query", err);
    //         }
    //
    //         res.json( { data: rows } );
    //     });
    // },

    // addProduct: function(res, body) {
    //     db.run("INSERT INTO products (articleNumber, productName," +
    //         " productDescription, productSpecifiers, stock, location, price, apiKey)" +
    //         " VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    //     body.article_number,
    //     body.name,
    //     body.description,
    //     body.specifiers,
    //     body.stock,
    //     body.location,
    //     parseInt(body.price) * 100,
    //     body.api_key,
    //     function(err) {
    //         if (err) {
    //             return products.errorResponse(res, "POST /product", err);
    //         }
    //
    //         products.getProduct(res, body.api_key, this.lastID, 201);
    //     });
    // },

    // updateProduct: function(res, body) {
    //     if (Number.isInteger(parseInt(body.id))) {
    //         db.run("UPDATE products SET articleNumber = ?, productName = ?," +
    //             " productDescription = ?, productSpecifiers = ?," +
    //             " stock = ?, location = ?, price = ?" +
    //             " WHERE apiKey = ? AND ROWID = ?",
    //         body.article_number,
    //         body.name,
    //         body.description,
    //         body.specifiers,
    //         body.stock,
    //         body.location,
    //         parseInt(body.price) * 100,
    //         body.api_key,
    //         body.id, (err) => {
    //             if (err) {
    //                 return products.errorResponse(res, "/product", err);
    //             }
    //
    //             res.status(204).send();
    //         });
    //     } else {
    //         res.status(400).json({
    //             errors: {
    //                 status: 400,
    //                 detail: "Required attribute product id (id)" +
    //                     " was not included in the request."
    //             }
    //         });
    //     }
    // },

    // deleteProduct: function(res, body) {
    //     if (Number.isInteger(parseInt(body.id))) {
    //         db.run("DELETE FROM products WHERE apiKey = ? AND ROWID = ?",
    //             body.api_key,
    //             body.id, (err) => {
    //                 if (err) {
    //                     return products.errorResponse(res, "/product", err);
    //                 }
    //
    //                 res.status(204).send();
    //             });
    //     } else {
    //         res.status(400).json({
    //             errors: {
    //                 status: 400,
    //                 detail: "Required attribute product id (id)" +
    //                     " was not included in the request."
    //             }
    //         });
    //     }
    // },

    errorResponse: function(res, path, err) {
        return res.status(500).json({
            errors: {
                status: 500,
                source: path,
                title: "Database error",
                detail: err.message
            }
        });
    }
};

module.exports = stuff;
