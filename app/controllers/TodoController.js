import { todoService } from "../services/TodoService.js"
import { Pop } from "../utils/Pop.js"

export class TodoController {
  constructor() {
    console.log('todo controller')
    this.getTodo()
  }

  async getTodo() {
    try {
      await todoService.getTodo()
    } catch (error) {
      Pop.error(error)
    }
  }
}