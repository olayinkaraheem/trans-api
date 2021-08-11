const db = require('mysql');
const dbConfig = require('../config/db')
// console.log(dbConfig)

const connection = db.createConnection(dbConfig)

connection.connect();

class TransactionsService {
    result = {}

    getTransactions = () => {
        return this.fetchTransactions()
        // return this.result
    }

    saveTransaction = (data) => {
        connection.query()
    }

    setResult = (data) => {
        this.result = Object.assign(this.result, data)
    }

    fetchTransactions = () => {
        connection.query("SELECT COUNT(*) AS count, SUM(`amount`) as sum, AVG(`amount`) as avg, MIN(`amount`) as min, MAX(`amount`) as max from `transactions` WHERE `created_at` > (NOW() - INTERVAL 1 MINUTE)", (err, result, fields) => {
            if(err){
                return { 'error': err }
            }
            else {
                this.setResult({ ...result[0] })
            }
        })

        // console.log('cd: ', this.result)

        return this.result
    }
}

module.exports = TransactionsService