const inputMeal = document.getElementById('inputMeal');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function(){
    document.getElementById("mealsList").innerHTML = "";
    // console.log(inputMeal.value);
    getMeal(inputMeal);
})

const getMeal = inputMeal => {
    // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputMeal.value}`;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal.value}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data.meals[0].idMeal);
        for (let i = 0; i < data.meals.length; i++) {
            const meals = data.meals[i];
            // console.log(meals.strMeal);
            // console.log(meals.strMealThumb);
            const mealsListDiv = document.getElementById('mealsList');

            const meal = `
            <div onClick = "displayMealDetails('${meals.idMeal}')">
                <img class="img-fluid" src="${meals.strMealThumb}" alt=""><br>
                <h4 class='text-center'>${meals.strMeal}</h4>
            </div>
            `
            const div = document.createElement('div'); //col-md-3
            div.className = 'col-md-3  mealDiv text-center';
            div.innerHTML = meal;
            mealsListDiv.appendChild(div);
        }
    })
}

const displayMealDetails = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.meals[0]);
    })
}

