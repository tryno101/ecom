const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A category must have a title"],
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
CategorySchema.virtual("subCategories", {
  ref: "SubCategory",
  foreignField: "parent",
  localField: "_id",
});

// CategorySchema.virtual("products", {
//   ref: "Product",
//   foreignField: "category",
//   localField: "_id",
// });

module.exports = mongoose.model("Category", CategorySchema);
