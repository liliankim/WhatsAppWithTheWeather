//search bar
// <input type="city" class="enterCity" id="findCity" placeholder="New York">
//search button
//<button>Get Weather</button>

var searchBox = document.querySelector(".enterCity");
var enterButton = document.querySelector(".searchButton");

searchBox.addEventListener ("click", search);
function search () {
    var Url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=de57a199ab57eec1fb38cee41c82b20b&units=imperial`
    fetch(Url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        var Url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=de57a199ab57eec1fb38cee41c82b20b&units=imperial`
        fetch(Url)
        .then(function(response){
            return response.json() 
        })
        .then(function(fiveDayData){
            console.log(fiveDayData.daily[1].temp.day, data.visibility);
        })
    })
}

enterButton.addEventListener("click", search);
function search() {
    console.log(searchBox.value);
    var Url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=de57a199ab57eec1fb38cee41c82b20b&units=imperial`
    fetch(Url)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        var Url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=de57a199ab57eec1fb38cee41c82b20b&units=imperial`
        fetch(Url)
        .then(function(response){
            return response.json() 
        })
        .then(function(fiveDayData){
            console.log(fiveDayData.daily[1].temp.day, data.visibility);
        })

    })




}



