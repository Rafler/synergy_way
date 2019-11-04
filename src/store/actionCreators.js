import { ACTION_TYPES } from "./actionTypes";

export const addToBasket = (card) => ({
  type: ACTION_TYPES.ADD_TO_BASKET,
  element: {
    ...card,
    amount: 1,
  }
});

export const addAmount = (id) => ({type: ACTION_TYPES.ADD_AMOUNT, id});
export const takeAmount = (id) => ({type: ACTION_TYPES.TAKE_AMOUNT, id});
export const deleteElement = (id) => ({
  type: ACTION_TYPES.DELETE_FROM_BASKET,
  id,
});
