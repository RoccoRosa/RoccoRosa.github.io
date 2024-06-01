const navbarToggle = document.querySelector(".responsive-toggle");

navbarToggle.addEventListener("click", () => {
  const links = document.querySelector(".links");
  links.classList.toggle("nav-toggle");
});

const scrollElement = document.querySelector(".scrollToTop");
window.addEventListener("scroll", () => {
  scrollElement.style.display = "block";
  window.pageYOffset > 300
    ? (scrollElement.style.display = "block")
    : (scrollElement.style.display = "none");
});

scrollElement.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
});

sr.reveal(
  `nav, .starter,
  .services,
  .destination,
  .next-trip,
  .testimonials,
  .brands,
  .subscribe,
  footer
  `,
  {
    interval: 200,
  }
);
const citySelect = document.getElementById('city-select');
citySelect.addEventListener('change', () => {
  const selectedCity = citySelect.value;
  calculateWeather(selectedCity);
});

function calculateWeather(city) {
  const cityData = {
    Rome: {
      temperature: 22,
      humidity: 60,
      windSpeed: 10
    },
    London: {
      temperature: 18,
      humidity: 70,
      windSpeed: 15
    },
    Finland: {
      temperature: 10,
      humidity: 50,
      windSpeed: 5
    }
  };

  const temperature = cityData[city].temperature;
  const humidity = cityData[city].humidity;
  const windSpeed = cityData[city].windSpeed;

  document.getElementById('weather-data').innerHTML = `
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} km/h</p>
  `;
}

const likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('active');
});