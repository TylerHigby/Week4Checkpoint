export class Weather {
  constructor(data) {
    // console.log(data)
    this.temp = data.main.temp

  }


  get WeatherTemplate() {
    console.log(this.temp)
    let F = (this.temp - 273.15) * 9 / 5 + 32
    let C = this.temp - 273.15
    return /*html*/`${F.toFixed()} degrees`
  }
}