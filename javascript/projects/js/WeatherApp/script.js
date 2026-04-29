let inputText = document.querySelector("#inputField");

let searchBtn = document.querySelector(".searchBtn");

let detail = document.querySelector(".detail");

searchBtn.addEventListener("click", () => {
  let city = inputText.value;
  let API_KEY = "e5b92422bda0b7293dbebc3474e15516";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const getData = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      console.log(
        `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`,
      );

      let city = document.querySelector(".city");
      let temp = document.querySelector(".temp");

      city.textContent = `${data.name} City`;
      temp.textContent = `${data.main.temp} `;

      let f = document.querySelector("#feel");
      let h = document.querySelector("#humidity");
      let p = document.querySelector("#pressure");
      let c = document.querySelector("#clouds");
      let w = document.querySelector("#w-speed");

      f.textContent = `${data.main.feels_like} 'C`;
      h.textContent = `${data.main.humidity} %`;
      p.textContent = `${data.main.pressure} hPa`;
      w.textContent = `${data.wind.speed} m/s`;
      c.textContent = `${data.clouds.all} %`;
    } catch (error) {
      console.log(error);
    }
  };

  getData();
});
