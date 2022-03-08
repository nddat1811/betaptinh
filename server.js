const e = require('express');
const express = require('express');
const handlebars = require('express-handlebars');
const { is } = require('express/lib/request');
const app = express();

const validate = (req, res, next) => {
    const data = req.query;
    const firstNumber = parseFloat(data.firstNumber);
    const secondNumber = parseFloat(data.secondNumber);
    let isError = false;
    let errorMsg = '';
    if (isNaN(firstNumber) || firstNumber == '') {
        isError = true;
        errorMsg = 'Số thứ nhất phải là số thực';
    } else if (isNaN(secondNumber) || secondNumber == '') {
        isError = true;
        errorMsg = 'Số thứ hai phải là số thực';
    }
    if (data.calculate == undefined) {
        isError = true;
        errorMsg = 'Vui lòng chọn phép tính';
    }
    if (isError) {
        res.render('home', {
            errorMsg: errorMsg,
        });
    } else {
        next();
    }
};

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/calculate', validate, (req, res, next) => {
    const firstNumber = parseFloat(req.query.firstNumber);
    const secondNumber = parseFloat(req.query.secondNumber);
    const operator = req.query.calculate;
    if (operator == 'add') {
        res.render('home', {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            result: firstNumber + secondNumber
        });
    } else if (operator == 'sub') {
        res.render('home', {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            result: firstNumber - secondNumber
        });
    } else if (operator == 'multi') {
        res.render('home', {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            result: firstNumber * secondNumber
        });
    } else if (operator == 'divide') {
        res.render('home', {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            result: firstNumber / secondNumber
        });
    }
});

app.listen(3000);