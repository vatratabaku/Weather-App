let apiKey = "fa6e0ce7f365ebb1f172a4fda669406e";
let container = document.querySelector(".container");
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let img = document.querySelector('.img');
let timeZone = document.querySelector('.timeZone');
let maxTemp = document.querySelector('.value1');
let minTemp = document.querySelector('.value2');
let thermometer = document.querySelectorAll('.thermometer');
let windValue = document.querySelector('.value3');
let cloudsValue = document.querySelector('.value4');
let title1 = document.querySelector('.title1');
let title2 = document.querySelector('.title2');
let title3 = document.querySelector('.title3');
let title4 = document.querySelector('.title4');
let windImg = document.querySelector('#wind');
let cloudsImg = document.querySelector('#cloud');
let tempIcon = document.getElementById('temp');
let temp2 = document.getElementById('temp2');

const generateCityWeather = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=" +
      apiKey
  ).then((res) => res.json())
    .then((data) => {
        let nameValue = data.name.toUpperCase();
        let tempValue =  Math.round(data.main.temp - 273.15);
        let descValue = data.weather[0].description;
        let maxValue = Math.round(data.main.temp_max - 273.15);
        let minValue =  Math.round(data.main.temp_min - 273.15);
        let time = data.timezone; 
        let windSpeed = data.wind.speed;
        let cloudsNumber = data.clouds.all;

        timeZone.innerHTML = 'Time Zone:' + time;
        name.innerHTML = nameValue; 
        desc.innerHTML = descValue;
        temp.innerHTML = tempValue + '°C';
        maxTemp.innerHTML = maxValue + '°C';
        minTemp.innerHTML = minValue + '°C';
        windValue.innerHTML = windSpeed + 'km/h';
        cloudsValue.innerHTML = cloudsNumber;
        title1.innerHTML = 'Minimum Temperature';
        title2.innerHTML = 'Maximum Temperature';
        title3.innerHTML = 'Wind Speed';
        title4.innerHTML = 'Clouds Number';

        tempIcon.src = 'img/temperature.png';
        windImg.src = 'img/wind.png';
        cloudsImg.src = 'img/cloud (1).png';
        temp2.src = 'img/temperature.png'


      if(descValue == 'overcast clouds'){
         img.setAttribute('src', 'img/cloudy (2).png')
      } else if(descValue == 'clear sky'){
        img.setAttribute('src', 'img/sun.png');
      } else if(descValue == 'scattered clouds'){
        img.setAttribute('src', 'img/cloudy.png');
      } else if(descValue == 'few clouds'){
        img.setAttribute('src', 'img/cloudy.png');
      }else if(descValue == 'haze'){
        img.setAttribute('src', 'img/mist.png');
      }else if(descValue == 'mist'){
        img.setAttribute('src', 'img/mist.png');
      } else if(descValue == 'drizzle'){
        img.setAttribute('src', 'img/rain.png');
      } else if(descValue == 'light rain'){
        img.setAttribute('src', 'img/rain.png');
      }else if(descValue == 'light intensity drizzle'){
        img.setAttribute('src', 'img/drizzle.png');
      }else if(descValue == 'broken clouds'){
        img.setAttribute('src', 'img/rain.png');
      } else if(descValue == 'snow'){
        img.setAttribute('src', 'img/snow.png');
      } else if(descValue == 'heavy snow'){
        img.setAttribute('src', 'img/snow.png');
      } else if(descValue == 'drizzle rain'){
        img.setAttribute('src', 'img/rain.png');
      } else if(descValue == 'moderate rain'){
        img.setAttribute('src', 'img/rain.png');
      } else if(descValue == 'light snow'){
        img.setAttribute('src', 'img/snow.png');
      }

    });
}

btn.addEventListener("click", generateCityWeather);
