import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { Pop } from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class WeatherService {

  async getWeather() {
    // console.log('getting weather')
    const res = await api.get('api/weather', AppState.Weather)
    AppState.Weather = new Weather(res.data)
    console.log('getting weather', res.data)

  }



}

export const weatherService = new WeatherService()