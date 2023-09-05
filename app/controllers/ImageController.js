import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { imageService } from "../services/ImageService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawImage() {
  // console.log('drawing image')
  // console.log(AppState)
  let Images = AppState.Image
  // console.log(Images)
  document.body.style.backgroundImage = `url(${Images.largeImgUrl})`
  // console.log(Images.imgUrl)
}




export class ImageController {
  constructor() {
    // console.log('image controller')
    this.getImage()
    AppState.on("Image", _drawImage)
  }

  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {
      Pop.error(error)
    }
  }

}