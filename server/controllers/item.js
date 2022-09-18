const Item = require("../models/item");
const factory = require("./handlerFactory");
const multer = require("multer");
const sharp = require("sharp");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadImage = upload.single('image');

exports.resizeImageItem = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.body.image = `item-${req.params.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500, { withoutEnlargement: true })
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/uploads/${req.body.image}`);

  res.status(200).json({
    status: "success",
    data: req.body.image,
  });
});

exports.aliasTopItems = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-price';
  req.query.fields = 'title,price';
  next();
};

exports.createItem = factory.createOne(Item);
exports.getAllItems = factory.getAll(Item);
exports.getItem = factory.getOne(Item);
exports.updateItem = factory.updateOne(Item);
exports.deleteItem = factory.deleteOne(Item);
