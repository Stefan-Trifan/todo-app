import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('ITAM'),
        new Todo('Esade'),
        new Todo('UMiami'),
        new Todo('MIT'),
        new Todo('UEES'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore()
    console.log('InitStore 🥑')
}

const loadStore = () => {
    throw new Error('Not implemented')
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos]

        case Filters.Completed:
            return state.todos.filter(todo => todo.done)

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)

        default:
            throw new Error(`Option ${filter} is not valid.`)
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new error('Description is requiered')
    state.todos.push(new Todo(description))
    saveStateToLocalStorage()
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {

    state.todos = state.todos.map((todo) => {
        if (todo.id === todoId) {
            todo.done = !todo.done
        }
        return todo
    })

    saveStateToLocalStorage()
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter((todo) => todo.id !== todoId)
    saveStateToLocalStorage()
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)
    saveStateToLocalStorage()
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage()
}

const getCurrentFilter = () => {
    return state.filter
}


// Objeto exportado por defecto
export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}