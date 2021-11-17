import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  heroes: [],
  isLoading: false,
  error: null
}

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      const newState = {
        ...state,
        isLoading: true
      }

      return newState;
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS : {
      const newHeroes = [...state.heroes, action.payload];

      const newState = {
        ...state,
        isLoading: false,
        heroes: newHeroes
      }

      return newState;
    }

    case ACTION_TYPES.CREATE_HERO_ERROR: {

      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default: return state;
  }
}

export default heroReducer;