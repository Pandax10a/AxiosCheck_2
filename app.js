
    axios.request({
        url: `https://www.themealdb.com/api/json/v1/1/random.php`
    }).then(successFunction).catch(failureFunction);

// if the api successfully responds, it will take the object inside data array and print the activity
function successFunction(response222) {
    
    document.body.insertAdjacentHTML(`beforeend`, `<h3>${response222[`data`][`meals`][`0`][`strMeal`]}</h3> <h2>${response222[`data`][`meals`][`0`][`strArea`]}</h2>
    <p>${response222[`data`][`meals`][`0`][`strInstructions`]}</p>`);
}
// just in case it fails to receive data from api
function failureFunction(error333333333) {
        document.body.insertAdjacentHTML(`beforeend`, `<h1> failed</h1>`);
    
}

axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
    params: {
        c: `Chicken`
    }
}).then(successFunction2).catch(failureFunction2);

// if the api successfully responds, it will take the object inside data array and print the activity
function successFunction2(response222) {

    for(let i = 0; i <response222[`data`][`meals`].length; i++){
   
    document.body.insertAdjacentHTML(`beforeend`, `<h3>${response222[`data`][`meals`][i][`strMeal`]}</h3> 
    <img  src = "${response222[`data`][`meals`][i][`strMealThumb`]}">`);
}
}
// just in case it fails to receive data from api
function failureFunction2(error333333333) {
        document.body.insertAdjacentHTML(`beforeend`, `<h1> failed</h1>`);
    
}