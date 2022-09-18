const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A subCategory must have a title"],
    },
    parent: {
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

// Virtual populate
SubCategorySchema.virtual("items", {
  ref: "Item",
  foreignField: "subCategory",
  localField: "_id",
});

SubCategorySchema.pre(/^find/, function (next) {
  this.populate({
    path: "parent",
    select: "title",
  });
  next();
});

module.exports = mongoose.model("SubCategory", SubCategorySchema);
