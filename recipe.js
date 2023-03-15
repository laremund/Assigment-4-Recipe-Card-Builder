
// Recipe Object
const recipe = {
    title: "",
    ingredients: [],
    instructions: []
};

// Event Listeners
// Recipe Title
document.getElementById("title").addEventListener("change", () => {
    recipe.title = document.querySelector("title").value;
});

// Add Ingredient
document.getElementById("add-ingredient").addEventListener("click", () => {
    // Add the ingredient the user typed in to the recipe object
    const ingredient = document.getElementById("ingredients").value;
    recipe.ingredients.push(ingredient);

    // Create an element to take space on the page for the ingredient
    const myElement = document.createElement("div");
    myElement.setAttribute("class", "new_divs");
    myElement.setAttribute("aria-label", "Ingredient Added");

    // If element is clicked on, remove it
    myElement.addEventListener("click", () => {
        myElement.remove();
        for (i in recipe.ingredients) {
            if (recipe.ingredients[i] == `${ingredient}`) {
                recipe.ingredients.splice(i, 1);
            }
        }
    });

    // Fill in element with text and place it on the page
    const text = document.createTextNode(`${ingredient}`);
    myElement.appendChild(text);
    document.getElementById("ingredient_list").appendChild(myElement);

    // Empty text input field
    document.getElementById("ingredients").value = "";
});

// Add Instruction
document.getElementById("add-instruction").addEventListener("click", () => {
    // Add the instruction the user typed in to the recipe object
    const instruction = document.getElementById("instructions").value;
    recipe.instructions.push(instruction);

    // Create an element to take space on the page for the instruction
    const myElement = document.createElement("div");
    myElement.setAttribute("class", "new_divs");
    myElement.setAttribute("aria-live", "assertive");

    // If the element is clicked on, remove it
    myElement.addEventListener("click", () => {
        myElement.remove();
        for (i in recipe.instructions) {
            if (recipe.instructions[i] == `${instruction}`) {
                recipe.instructions.splice(i, 1);
            }
        }
    });

    // Fill in element with text and place it on the page
    const text = document.createTextNode(`${instruction}`);
    myElement.appendChild(text);
    document.getElementById("instruction_list").appendChild(myElement);

    // Empty text input field
    document.getElementById("instructions").value = "";
});

// Reset button
document.getElementById("reset-form").addEventListener("click", () => {
    // Reset recipe object
    recipe.title = "";
    recipe.ingredients = [];
    recipe.instructions = [];

    // Reset fields / lists
    document.getElementById("title").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instructions").value = "";
    document.getElementById("ingredient_list").innerHTML = `<div id="ingredient_list"></div>`
    document.getElementById("instruction_list").innerHTML = `<div id="instruction_list"></div>`
});

// Create Recipe Card
document.getElementById("create-card").addEventListener("click", () => {
    writeRecipeToFile(recipe);
});