const express = require('express');
const transactionController = new (require("../controllers/transaction.controller"));

const router = express.Router();

router.get('/transactions', transactionController.getTransactions)
router.post('/transaction', transactionController.postTransaction)

module.exports = router;