const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error');

const userRouter = require('./routes/user');
const itemRouter = require('./routes/item');
const categoryRouter = require('./routes/category');
const subCategoryRouter = require('./routes/subCategory');

// Start express app
const app = express();

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());
app.options('*', cors());

// Serving static files
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

// Development logging
if (process.env.NODE_ENV === 'DEVELOPMENT') {
    app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body, limit: '10kb' 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(compression());

// Test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

// 3) ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/items', itemRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/subCategories', subCategoryRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  
  app.use(globalErrorHandler);

module.exports = app
