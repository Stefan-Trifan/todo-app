import html from "./app.html?raw";
import todoStore from '../store/todo.store'

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        console.log(todos)
    }

    // Función anónima.
    // Cuando la función App() se llama
    (() => {
        const app = document.createElement('div')
        app.innerHTML = html
        document.querySelector(elementId).append(app)
        displayTodos()
    })()
}