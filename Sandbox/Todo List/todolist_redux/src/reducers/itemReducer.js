import initialState from '../reducers/initialState'
import * as types from '../actions/actionTypes'

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case types.ADD_ITEM:
              return [
                ...state,
                {
                  text: action.todo,
                  key: Date.now()
                }
              ];
    case types.REMOVE_ITEM:
        return state.filter(todo => todo.key !== action.key);
    default:
      return state
  }
}
