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
    const ingradientsSec = document.getElementById('ingradientsSec');
    ingradientsSec.style.display = 'block';
    const mealSec = document.getElementById('mealSec');
    mealSec.style.display = 'none';
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.meals[0]);
        const mealsDetails = document.getElementById('mealsDetails');
        mealsDetails.innerHTML = `
            <button id="backBtn" type="button" class="btn btn-warning mb-1">back></button>
            <img class="img-fluid rounded mx-auto d-block" style="width:400px;" src="${data.meals[0].strMealThumb}" alt="images">
            <h2 class="fw-bold">${data.meals[0].strMeal}</h2>
            <h4>Ingredients</h4>
            <ul>
                <li>${data.meals[0].strIngredient1}</li>
                <li>${data.meals[0].strIngredient2}</li>
                <li>${data.meals[0].strIngredient3}</li>
                <li>${data.meals[0].strIngredient4}</li>
                <li>${data.meals[0].strIngredient5}</li>
                <li>${data.meals[0].strIngredient6}</li>
                <li>${data.meals[0].strIngredient7}</li>
                <li>${data.meals[0].strIngredient8}</li>
                <li>${data.meals[0].strIngredient9}</li>
                <li>${data.meals[0].strIngredient10}</li>
            </ul>   
        `
    })
}

