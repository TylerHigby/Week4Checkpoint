import { AppState } from "../AppState.js"
import { Quote } from "../models/QuoteModel.js"
import { api } from "./AxiosService.js"

class QuoteService {



  async getQuote() {
    // console.log('getting Quotes')
    const res = await api.get('api/quotes', AppState.Quote)
    // console.log('getting quotes', res.data)
    AppState.Quote = new Quote(res.data)
  }



}

export const quoteService = new QuoteService