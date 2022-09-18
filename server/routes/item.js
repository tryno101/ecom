const express = require("express");
const itemController = require("../controllers/item");

const router = express.Router();

router
  .route("/top-5-cheap")
  .get(itemController.aliasTopItems, itemController.getAllItems);

router
  .route("/")
  .post(itemController.uploadImage, itemController.resizeImageItem, itemController.createItem)
  .get(itemController.getAllItems);

router
  .route("/:id")
  .get(itemController.getItem)
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = router;
