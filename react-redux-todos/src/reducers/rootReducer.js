import { ADD_TODO, REMOVE_TODO, GET_TODOS, UPDATE_TODO } from "../actions/actionCreators";

const initialState = {
  todos: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
		case GET_TODOS:
      return { ...state, todos: action.todos };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case UPDATE_TODO:
      const updatedTodos = state.todos.map(t => ((t._id === action.todo._id) ? { ...t, completed: !t.completed } : t));
        return { ...state, todos: updatedTodos };
		case REMOVE_TODO:
      let todos = state.todos.filter(t => t._id !== action.id);
      return { ...state, todos };
    default:
      return state;
  }
}
