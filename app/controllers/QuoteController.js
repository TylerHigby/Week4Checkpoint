import { AppState } from "../AppState.js";
import { Quote } from "../models/QuoteModel.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuote() {
  // console.log('drawing quote')
  // console.log('Quote : ' + AppState.Quote.QuoteTemplate)
  // console.log(AppState.Quote.QuoteTemplate)
  setHTML('Quote', AppState.Quote.QuoteTemplate)
}


export class QuoteController {
  constructor() {
    // console.log('quote controller')
    this.getQuote()
    AppState.on('Quote', _drawQuote)
  }


  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      Pop.error(error)
    }
  }
}