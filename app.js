
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