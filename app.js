const ui = new UI();
const  storage = new Storage();
//Get Stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city,weatherLocation.state);
//Get Weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  storage.setLocationsData(city,state);

  weather.changeLocation(city,state);

  //Get weather
   getWeather();

  //Close model
  $('#locModal').modal('hide');
  e.preventDefault();
});


function getWeather() {
weather.getWeather()
  .then(results => {
     
     ui.paint(results);
  })
  .catch(err => console.log(err));
}