export class Quote {
  constructor(data) {
    // console.log(data)
    this.body = data.content
    this.author = data.author
  }



  get QuoteTemplate() {
    return  /*html*/`          <div class="col-9 text-center text-white blurBG border border-1 rounded">${this.body} <div class="quoteAuthor">- ${this.author}</div></div>`
  }

}