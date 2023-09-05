import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class TodoService {

  async getTodo() {
    console.log('getting Todos')
    const res = await api.get('api/todos', AppState.Todo)
    console.log('getting todos', res)
  }



}


export const todoService = new TodoService()