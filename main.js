const searchBox = document.querySelector(".searchBox");
const searchBtn =document.querySelector(".searchBtn");
const recipeContainer =document.querySelector(".recipe-container");

const fetchRecipes = async (searchInput)=>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();
    console.log(data.meals);
}
searchBtn.addEventListener("click",(e)=> {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
})