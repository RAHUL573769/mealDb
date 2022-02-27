const searchField = document.getElementById('search-field');


const buttonField = document.getElementById('button-search');
   
buttonField.addEventListener('click', function () {
    
    let searchText = searchField.value;
  
    searchField.value = '';
const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   
    // console.log(url);
    fetch(url)
        .then(response => response.json())
    .then(data=>console.log(data))

})