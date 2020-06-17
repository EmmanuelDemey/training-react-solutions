import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

const LIKE = "LIKE";
const DISLIKE = "DISLIKE";

// Selecteurs
export const getNumberLikedPeople = (state) => state.length;
export const isLiked = (state, person) =>
  state.some((p) => p.url === person.url);

// Action creators
export const likeAction = (person) => ({ type: LIKE, payload: person });
export const dislikeAction = (person) => ({ type: DISLIKE, payload: person });

// reducer
export const starWarsLike = (state, action) => {
  // { type: TYPE, payload: ...}
  switch (action.type) {
    case LIKE:
      return [...state, action.payload];
    case DISLIKE:
      return state.filter((person) => person.url !== action.payload.url);
    default:
      return state;
  }
};

export const store = createStore(
  starWarsLike,
  [],
  compose(applyMiddleware(createLogger()))
);
