var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// const checkValid  = (req, res, next) => {
//   const data = req.query;
//   const num1 = parseFloat(data.num1);
//   const num2 = parseFloat(data.num2);
//   let isError = false;
//   let errorMsg = '';
//   if (num1.value == "" && num2.value == "") {
//     errorMsg = "Mời nhập <em>2 số </em> để thực hiện phép tính";
//     isError  = true;
//   }
//   if (num1.value == "") {
//     errorMsg = "Mời nhập <em>số thứ nhất</em> để thực hiện phép tính";
//     isError  = true;
//   }
//   if (num2.value == "") {
//     errorMsg = "Mời nhập <em>số thứ hai</em> để thực hiện phép tính";
//     isError  = true;
//   }
//   if (data.calc == undefined) {
//     errorMsg = "Mời chọn <em>phép tính </em>";
//     isError  = true;
//   }

//   if (isError) {
//     res.render('index', {
//         errorMsg: errorMsg,
//     });
//   } else {
//       next();
//   }
// };

// app.get('/', (req, res) => {
//   res.render('index');
// });


// app.get('/tinh', checkValid, function(req, res, next) {
//     const num1 = parseFloat(req.query.num1);
//     const num2 = parseFloat(req.query.num2);
//     const calculation = req.query.calculate;
  
//     if (calculation == 'add') {
//         res.render('index', {
//             num1: num1,
//             num2: num2,
//             resultForm: num1 + num2
//         });
//     } else if (calculation == 'sub') {
//         res.render('index', {
//             num1: num1,
//             num2: num2,
//             resultForm: num1 - num2
//         });
//     } else if (calculation == 'mult') {
//         res.render('index', {
//             num1: num1,
//             num2: num2,
//             resultForm: num1 * num2
//         });
//     } else if (calculation == 'div') {
//         if(num2 == 0){
//             res.render('index', {
//                 num1: num1,
//                 num2: num2,
//                 errorMsg: "<em>Số thứ hai </em> không thể bằng 0 trong phép chia"
//             });
//         }
//         else {
//             res.render('index', {
//                 num1: num1,
//                 num2: num2,
//                 resultForm: num1 / num2
//             });
//         }   
//     }
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
