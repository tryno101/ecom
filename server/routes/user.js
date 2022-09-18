const express = require("express");
const userController = require("./../controllers/user");
const userAuthController = require("./../controllers/userAuth");

const router = express.Router();

router.post("/signup", userAuthController.signup);
router.post("/login", userAuthController.login);
router.post("/logout", userAuthController.logout);

router.get(
  "/me",
  userController.getMe,
  userController.getUser
);
router.patch(
  "/updateMe",
  userController.updateMe
);

router
  .route("/")
  .get(
    userController.getAllUsers
  );

module.exports = router;
