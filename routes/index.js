var express = require('express');
var router = express.Router();

/* GET index page. */

const checkValid = (req, res, next) => {
  const data = req.query;
  const num1 = parseFloat(data.num1);
  const num2 = parseFloat(data.num2);
  let isError = false;
  let errorMsg = '';

  if (num1 == "" || isNaN(num1)) {
    errorMsg = "Số thứ nhất không phải số thực";
    isError = true;
  }
  else if (num2 == "" || isNaN(num2)) {
    errorMsg = "Số thứ hai không phải số thực";
    isError = true;
  }
  else if (data.calc == undefined) {
    errorMsg = "Mời chọn phép tính ";
    isError = true;
  }

  if (isError) {
    res.render('index', {
      errorMsg: errorMsg,
    });
  } else {
    next();
  }
};

router.get('/', (req, res) => {
  res.render('index');
});


router.get('/tinh', checkValid, function (req, res, next) {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const calculation = req.query.calc;

  if (calculation == 'add') {
    res.render('index', {
      num1: num1,
      num2: num2,
      result: num1 + num2
    });
  } else if (calculation == 'sub') {
    res.render('index', {
      num1: num1,
      num2: num2,
      result: num1 - num2
    });
  } else if (calculation == 'mul') {
    res.render('index', {
      num1: num1,
      num2: num2,
      result: num1 * num2
    });
  } else if (calculation == 'div') {
    if (num2 == 0) {
      res.render('index', {
        num1: num1,
        num2: num2,
        errorMsg: "Số thứ hai không thể bằng 0 trong phép chia"
      });
    }
    else {
      res.render('index', {
        num1: num1,
        num2: num2,
        result: num1 / num2
      });
    }
  }
});

module.exports = router;
