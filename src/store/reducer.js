import { ACTION_TYPES } from "./actionTypes";

const initialState = {
  cards: [],
  basket: [],
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_BASKET: {
      if (!state.basket.some(el => el.id === action.element.id)) {
        return {
          ...state,
          basket: [...state.basket, action.element],
        }
      }else {
        return state;
      }
    }
    case ACTION_TYPES.ADD_AMOUNT: {
      return {
        ...state,
        basket: [...state.basket].map(elem => (
          elem.id === action.id
              ? { ...elem, amount: elem.amount + 1 }
              : { ...elem }
      ))
      }
    }
    case ACTION_TYPES.TAKE_AMOUNT: {
      return {
        ...state,
        basket: state.basket.map(elem => (
            elem.id === action.id && elem.amount > 1
                ? { ...elem, amount: elem.amount - 1 }
                : { ...elem }
        ))
      }
    }
    case ACTION_TYPES.DELETE_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.filter(el => el.id !== action.id)
      }
    }
    default: {
      return state;
    }
  }
}
