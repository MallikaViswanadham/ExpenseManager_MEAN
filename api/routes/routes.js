var express = require("express");
const mongoose = require("mongoose");
var expenseModel = require('../src/expenses/expenseModel');


//var addExpense = require('../src/expenses/expenseController');
const expensecontroller = require('../src/expenses/expenseController');

const router = express.Router();

router.route('/expenses/addexpense').post(expensecontroller.createaddexpense);
// router.get('/expenses/addexpense', function (req, res) {
//     res.send();
// });
//router.route('/expenses/addexpense').get(expensecontroller.createaddexpense);
router.route('/expenses/addexpense').get(async (req, res) => {
    try {
        const testData = await expenseModel.find({}).exec();
        res.json(testData);
    } catch (err) {
        console.log("Found some error: " + err);
        res.status(500).json({ error: 'Error fetching data' });
    }
});



module.exports = router;