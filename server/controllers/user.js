const User = require("./../models/user");
const factory = require("./handlerFactory");
const catchAsync = require("./../utils/catchAsync");

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
