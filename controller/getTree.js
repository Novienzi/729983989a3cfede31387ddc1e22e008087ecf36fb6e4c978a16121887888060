const dbConn = require("../connection/dbConnection")
const _ = require('lodash')
const humps = require('humps')

//mengambil struktur tree dari database dengan toplevel item sesuai input
//mengembalikan assoc array dengan property namadan children
//dimana children adalah array of assoc array berisichild dibawah member ybs...
function get_tree(id) {
    let sql = `SELECT * FROM member m
                WHERE parent_id = "${id}"`

    return new Promise((resolve, reject) => {
        dbConn.query(sql, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result.map(res => {
                    const plainObject = _.toPlainObject(res)
                    const camelCaseObject = humps.camelizeKeys(plainObject)
                    return camelCaseObject
                })
                )
            }
        })

    })
}

module.exports = { get_tree }