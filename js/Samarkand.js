var APIkey = "089af64f2ddcd636dee25eae032c9fcc";
var icons = 'http://openweathermap.org/img/w/';
var element = document.getElementById("weather");
fetch('https://api.openweathermap.org/data/2.5/weather?q=Tashkent'+"&units=metric&appid=" + APIkey)
	.then(function (res) {
		return res.json();
	})
	.then(function (data) {
		console.log(data)
		document.getElementById('city').innerHTML = data.name;
		document.getElementById('temp').innerHTML = data.main.temp+'';
		document.getElementById('weath').innerHTML = data.weather[0].main;
		document.getElementById('icon').src = icons +data.weather[0].icon + '.png';
		document.getElementById('pressure').innerHTML = data.main.pressure+'';
		document.getElementById('humidity').innerHTML = data.main.humidity+'';
		document.getElementById('wind').innerHTML = data.wind.speed +' km/h';

	})
	.catch(function (err) {
		console.log(err);
	})
