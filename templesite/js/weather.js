// Copenhagen
var copenRequest = new XMLHttpRequest();
copenRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 2618425 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
copenRequest.onload = function () {

    var data = JSON.parse(copenRequest.responseText);

        var temp = data.main.temp;
        document.getElementById('curTempCopen').innerHTML = temp + "&deg;F";
        var wImg = document.getElementById('wImageCopen');
        var myImage = document.createElement('img');
        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        document.getElementById('imgDescriptionCopen').innerHTML = "<p>" + data.weather[0].description + "</p>";
        document.getElementById('curDescCopen').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

copenRequest.send();


// Johannesburg
var johanRequest = new XMLHttpRequest();
johanRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 953987 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
johanRequest.onload = function () {

    var data = JSON.parse(johanRequest.responseText);


        var temp = data.main.temp;
        document.getElementById('curTempJohan').innerHTML = temp + "&deg;F";
        var wImg = document.getElementById('wImageJohan');
        var myImage = document.createElement('img');
        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        document.getElementById('imgDescriptionJohan').innerHTML = "<p>" + data.weather[0].description + "</p>";
        document.getElementById('curDescJohan').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

johanRequest.send();


// Las Vegas
var vegasRequest = new XMLHttpRequest();
vegasRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 5506956 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
vegasRequest.onload = function () {

    var data = JSON.parse(vegasRequest.responseText);


        var temp = data.main.temp;
        document.getElementById('curTempVegas').innerHTML = temp + "&deg;F";
        var wImg = document.getElementById('wImageVegas');
        var myImage = document.createElement('img');
        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        document.getElementById('imgDescriptionVegas').innerHTML = "<p>" + data.weather[0].description + "</p>";
        document.getElementById('curDescVegas').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

vegasRequest.send();


// Portland
var portlandRequest = new XMLHttpRequest();
portlandRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 4979245 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
portlandRequest.onload = function () {

    var data = JSON.parse(portlandRequest.responseText);


        var temp = data.main.temp;
        document.getElementById('curTempPort').innerHTML = temp + "&deg;F";
        var wImg = document.getElementById('wImagePort');
        var myImage = document.createElement('img');
        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        document.getElementById('imgDescriptionPort').innerHTML = "<p>" + data.weather[0].description + "</p>";
        document.getElementById('curDescPort').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

portlandRequest.send();