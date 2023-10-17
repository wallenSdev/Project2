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
    broccoli: "Broccoli",


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
      name: "Grilled Chicken Breast with Veggies and Mashed Potatoes",
      ingredients: ["Chicken", "Broccoli", "Onion", "Carrot", "Peppers", "Potatoes"]
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

  //Spoonacular API

  // function getSource(id) {
  //     $.ajax({
  //         url: "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=ada030f7a07b411c83ea10178938e8de",
  //         succes: function (res) {
  //             document.getElementById("sourceLink").innerHTML = res.sourceUrl
  //             document.getElementById("sourceLink").href = res.sourceUrl
  //         }
  //     });
  // }

  // function getRecipe(q) {
  //     $.ajax({
  //         url: "https://api.spoonacular.com/recipes/search?apiKey=ada030f7a07b411c83ea10178938e8de&number=8&query" + q,
  //         success: function (res) {
  //             document.getElementById("output").innerHTML = "<h1>" + res.results[0].title + "</h1><br><img src='" + res.baseUri + res.results[0].image + "' width='400' /> <br> ready in " + res.results[0].readyInMinutes + " minutes"
  //             getsource(res.results[0].id)
  //         }
  //     })
  // };

