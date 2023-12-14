const cityForm = document.querySelector('[data-js="change-location"]')

const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]'
)
const cityCard = document.querySelector('[data-js="cityCard"]')

const showCityCard = () => {
  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
}

const showCityWeatherInfo = async cityName => {
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key)

  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`
  timeImage.src = IsDayTime ? `./src/day.svg` : `./src/night.svg`
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value.toFixed()
  showCityCard()
}

let timeImage = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showLocalStorageCity = () => {
  const city = localStorage.getItem('city')
  if (city) {
    showCityCard()
    showCityWeatherInfo(city)
  }
}

cityForm.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.city.value

  showCityCard()
  showCityWeatherInfo(inputValue)
  localStorage.setItem('city', inputValue)
  cityForm.reset()
})

showLocalStorageCity()
