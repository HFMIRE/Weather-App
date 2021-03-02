"use strict";
window.addEventListener("load", () => {
  let lon;
  let lat;
  let apikey = "7287ea107589231fb0a9d68025bf443f";
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let iconDisplay = document.querySelector(".icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((postion) => {
      lon = postion.coords.longitude;
      lat = postion.coords.latitude;
      console.log(lat, lon);

      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`,
        {
          method: "GET",
          header: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const { description, icon } = data.weather[0];
          const name = data.name;
          // setting up the dom elements from API
          temperatureDegree.textContent = temp;
          locationTimezone.textContent = name;
          temperatureDescription.textContent = description;
          //setting up icon
          iconDisplay.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          console.log(temperatureDescription);
        });
    });
  }
});

[,];
