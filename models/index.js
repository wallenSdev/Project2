const User = require('./User');
const Ingredient = require('./Ingredient');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

Recipe.belongsToMany(Ingredient, {
  through: 'RecipeIngredient', 
  foreignKey: 'recipe_id',
});

Ingredient.belongsToMany(Recipe, {
  through: 'RecipeIngredient', 
  foreignKey: 'ingredient_id',
});

module.exports = { User, Ingredient, Recipe };