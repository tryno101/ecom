const mongoose = require("mongoose");
const SubCategory = require("./subCategory");

const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A service must have a title"],
    },
    price: {
      type: Number,
      required: [true, "A service must have a price"],
    },
    image: {
      type: String,
    },
    details_description: {
      type: String,
    },
    subCategory: {
      type: mongoose.Schema.ObjectId,
      ref: "SubCategory",
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ItemSchema.pre("save", async function (next) {
  const subCate = await SubCategory.findOne({ _id: this.subCategory });
  this.category = subCate.parent;
  next();
});

ItemSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
    select: "-__v",
  });
  this.populate({
    path: "subCategory",
    select: "-__v",
  });
  next();
});

module.exports = mongoose.model("Item", ItemSchema);
