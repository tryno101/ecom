const SubCategory = require('./../models/subCategory');
const factory = require('./handlerFactory');

exports.createSubCategory = factory.createOne(SubCategory);
exports.getAllSubCategories = factory.getAll(SubCategory);
exports.getSubCategory = factory.getOne(SubCategory);
exports.updateSubCategory = factory.updateOne(SubCategory);
exports.deleteSubCategory = factory.deleteOne(SubCategory);
