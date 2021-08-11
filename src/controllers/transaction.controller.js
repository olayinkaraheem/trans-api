const transactionService = new(require('../services/transactions.service'))

class TransactionController {

    getTransactions = (req, res) => {
        const transactions = transactionService.getTransactions()

        console.log('result here: ', transactions) // empty, async/await?

        res.send([
            {
                'id': 1,
                'transaction_type': 'Credit',
                'amount': "5000",
                'timestamp': '2021-08-11 01:15:24'
            }
        ])
    }

    postTransaction = (req, res) => {
        res.send({
            'ok': 'okay'
        })
    }

    setResult = (result) => {
        this.result = result;
    }
}

module.exports = TransactionController;