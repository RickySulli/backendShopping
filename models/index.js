// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const { foreign_key } = require('inflection');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_id',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:ProductTag,
  foreignKey: 'tag_id'
  //accidentally had tag_id
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through:ProductTag,
  foreignKey: 'product_id' 
  //accidentally had product_id
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

