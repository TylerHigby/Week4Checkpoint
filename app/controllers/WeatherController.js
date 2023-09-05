import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawWeather() {
  // console.log(AppState.Weather.main.temp)
  // console.log(AppState.Weather.WeatherTemplate)
  document.getElementById("Weather").innerHTML = AppState.Weather.WeatherTemplate
  // setHTML('Weather', AppState.Weather.WeatherTemplate)
}


export class WeatherController {
  constructor() {
    // console.log('weather controller')
    this.getWeather()
    AppState.on('Weather', _drawWeather)
  }

  async getWeather() {
    try {
      // console.log('hellos')
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)
    }
  }



}