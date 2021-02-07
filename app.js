// search button event handaler
const inputMeal = document.getElementById('inputMeal');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
    document.getElementById("mealsList").innerHTML = "";
    document.getElementById('warningSec').style.display = 'none';
    document.getElementById('ingradientsSec').style.display = 'none';
    document.getElementById('mealSec').style.display = 'block';
    getMeal(inputMeal);
})

// display all meal by search 
const getMeal = async inputMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal.value}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMeals(data.meals);
    } catch (error) {
        document.getElementById('warningSec').innerHTML = `
            <h1><span style='font-size:100px;'>&#128557;<br></span>Wrong Meal Name!</h1>
        `;
        document.getElementById('warningSec').style.display = 'block';
    }    
}
const displayMeals = meals =>{
    meals.forEach(meals => {
        const mealsListDiv = document.getElementById('mealsList');
            const meal = `
                <div onClick = "getMealDetails('${meals.idMeal}')">
                    <img class="img-fluid" src="${meals.strMealThumb}" alt=""><br>
                    <h4 class='text-center'>${meals.strMeal}</h4>
                </div>
                `
        const div = document.createElement('div');
        div.className = 'col-md-3 mealDiv text-center';
        div.innerHTML = meal;
        mealsListDiv.appendChild(div);
    });              
}



// display meal ingradients by click
const getMealDetails = async mealId => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try { 
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data);
    } catch (error) {
        document.getElementById('warningSec').innerHTML = `
            <h1><span style='font-size:100px;'>&#128557;<br></span>Please try again later!</h1>
        `;
        document.getElementById('warningSec').style.display = 'block';
    }
}
const displayMealDetails = data =>{
    document.getElementById("mealsDetails").innerHTML = "";
    const ingradientsSec = document.getElementById('ingradientsSec');
    ingradientsSec.style.display = 'block';
    const mealSec = document.getElementById('mealSec');
    mealSec.style.display = 'none';
    // console.log(data.meals[0]);
    const mealsDetails = document.getElementById('mealsDetails');
    mealsDetails.innerHTML = `
        <button onClick = "backButton()" id="backBtn" type="button" class="btn btn-warning mb-2">back></button>
        <img class="img-fluid rounded mx-auto d-block" style="width:400px;" src="${data.meals[0].strMealThumb}" alt="images">
        <h2 class="fw-bold md-1">${data.meals[0].strMeal}</h2>
        <h4 class="md-4">Ingredients</h4>
        <ul>
            <li>${data.meals[0].strIngredient1}</li>
            <li>${data.meals[0].strIngredient2}</li>
            <li>${data.meals[0].strIngredient3}</li>
            <li>${data.meals[0].strIngredient4}</li>
            <li>${data.meals[0].strIngredient5}</li>
            <li>${data.meals[0].strIngredient6}</li>
            <li>${data.meals[0].strIngredient7}</li>
        </ul>
        <button onClick="youtubeBtn('${data.meals[0].strYoutube}')" type="button" class="btn btn-danger md-2">Youtube Tutorial Here!</button>
     `
}


// back button 
const backButton = () => {
    const ingradientsSec = document.getElementById('ingradientsSec');
    ingradientsSec.style.display = 'none';
    const mealSec = document.getElementById('mealSec');
    mealSec.style.display = 'block';
}

// youtubeButton
const youtubeBtn = youtubeLink => {
    // console.log(youtubeLink);
    window.open(youtubeLink,'_blank');
}