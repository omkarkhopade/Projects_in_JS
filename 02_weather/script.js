document.addEventListener('DOMContentLoaded' , () =>{
    const cityInput = document.getElementById('city-input');
    const getWeatherButton = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityNameDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');
    const descriptionDisplay = document.getElementById('error-message');

    const API_KEY = "17bea72df8d794fda77c374f503e8b4e"; // env VARIABLES


   getWeatherButton.addEventListener('click' , async() =>{
    const city = cityInput.value.trim()
    if(!city) return;

    try{
        const weatherData = await fetchWeatherData(city);
        displayWeatherData(weatherData);
    } catch(error){
        showError();        
    }


   })  
   
   async function fetchWeatherData(city){
    //gets the data 
   }
   function displayWeatherData(weatherData){
    //display the data
   }
   function showError(){
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');  
   }

})