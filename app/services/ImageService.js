import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class ImageService {


  async getImage() {
    // console.log('getting images')
    // const res = await api.get('api/Images', AppState.Image)
    // console.log('getting images', res.data)
    // AppState.Image = new Image(res.data)
    // console.log(AppState.Image)
    try {
      const res = await api.get('api/Images')
      // console.log(res.data)
      AppState.Image = res.data
    } catch (error) {
      Pop.error(error)
    }
  }



}

export const imageService = new ImageService()