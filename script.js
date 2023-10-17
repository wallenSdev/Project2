const ingredients = {
    chicken: "Chicken",
    beef: "Beef",
    salmon: "Salmon",
    shrimp: "Shrimp",
    potatoes: "Potatoes",
    rice: "Rice",
    tomatoes: "Tomatoes",
    peppers: "Peppers",
    onion: "Onion",
    lemon: "Lemon",
    carrot: "Carrot",


    // Add more ingredients and descriptions as needed
  };

  function populateIngredients() {
    const ingredientsList = document.getElementById("ingredientsList");
  
    for (const ingredient in ingredients) {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      listItem.addEventListener("click", () => addToFridge(ingredient));
      ingredientsList.appendChild(listItem);
    }
  }
  
  function addToFridge(ingredient) {
    if (!fridgeIngredients.includes(ingredient)) {
      fridgeIngredients.push(ingredient);
      const fridgeList = document.getElementById("fridgeList");
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      fridgeList.appendChild(listItem);
    }
  }

  const recipes = [
    {
      name: "Recipe 1",
      ingredients: ["ingredient1", "ingredient2"]
    },
    {
      name: "Recipe 2",
      ingredients: ["ingredient2", "ingredient3"]
    },
    
  ];

  function searchRecipes() {
    const selectedIngredients = Array.from(document.getElementById("ingredients").selectedOptions).map(option => option.value);

    const matchingRecipes = recipes.filter(recipe =>
      selectedIngredients.some(ingredient => recipe.ingredients.includes(ingredient))
    );

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    
    if (matchingRecipes.length === 0) {
      resultsContainer.innerHTML = "<li>No recipes found with selected ingredients.</li>";
    } else {
      matchingRecipes.forEach(recipe => {
        const recipeIngredients = recipe.ingredients.map(ingredient => ingredients[ingredient]).join(", ");
        const listItem = document.createElement("li");
        listItem.textContent = `${recipe.name}: ${recipeIngredients}`;
        resultsContainer.appendChild(listItem);
      });
    }
  }