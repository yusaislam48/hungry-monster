const inputMeal = document.getElementById('inputMeal');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function(){
    document.getElementById("mealsList").innerHTML = "";
    console.log(inputMeal.value);
    getMeal(inputMeal);
})

const getMeal = inputMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputMeal.value}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.meals.length; i++) {
            const meals = data.meals[i];
            console.log(meals.strMeal);
            console.log(meals.strMealThumb);
            const mealsListDiv = document.getElementById('mealsList');

            const meal = `
                <div><img src="${meals.strMealThumb}" alt=""></div><br>
                <div><h4 class='text-center'>${meals.strMeal}</h4></div>
            `
            const div = document.createElement('div'); //col-md-3
            div.className = 'col-md-3  mealDiv text-center';
            div.innerHTML = meal;
            mealsListDiv.appendChild(div);
        }
    })
}

    // strMeal
    // strMealThumb
    // Mustard champ
    // https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
    // https://www.themealdb.com/api/json/v1/1/search.php?s=Mustard_champ


// Beef
// app.js:7 Chicken
// app.js:7 Dessert
// app.js:7 Lamb
// app.js:7 Miscellaneous
// app.js:7 Pasta
// app.js:7 Pork
// app.js:7 Seafood
// app.js:7 Side
// app.js:7 Starter
// app.js:7 Vegan
// app.js:7 Vegetarian
// app.js:7 Breakfast
// app.js:7 Goat
