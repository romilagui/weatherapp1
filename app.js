
/* Fist: Init weather object
 Then Change Location
 Paint UI
 Init UI
 Add Local Storage
*/
// Initialize storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// 1 º Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state)

// 4 º Init UI
const ui = new UI();

// 5 º Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//  6º  Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // 2º Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  // 1 º Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

/**  Extra Code with Explanation for the Project **/
/*
// 1 º Initialize Weather Object
const weather = new Weather('Boston', 'MA');
weather.getWeather()
.then(results => {
  console.log(results);
})
.catch(err => console.log(err));
// This returns a promise because of the async await
*/