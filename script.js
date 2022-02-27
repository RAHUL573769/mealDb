const searchField = document.getElementById('search-field');


const buttonField = document.getElementById('button-search');
   
buttonField.addEventListener('click', function () {
    
    let searchText = searchField.value;
  
    searchField.value = '';
const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   
    // console.log(url);
    fetch(url)
        .then(response => response.json())
    .then(data=>displaySearchResults(data.meals))

})

const displaySearchResults = meals => {
    const searchResult = document.getElementById('searchresults');

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div onclick="loadMealDetail(${meal.idMeal})"class="card">
      <img src="${meal.strMealThumb }" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
      </div>
    </div>`;
        searchResult.appendChild(div);
})

}

const loadMealDetail = mealId => {
    console.log(mealId);

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
    .then(data=>displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
    `;

    mealDetails.appendChild(div);
}