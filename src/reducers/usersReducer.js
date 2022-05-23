//редьюсер для главной страницы

const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

import "../components/actions/users";

const defaultState = {
  data: [],
  currentPage: 1,
  total_pages: 0,
  isFetchError: false,
};

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        data: action.payload.data,
        total_pages: action.payload.total_pages,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    default:
      return state;
  }
}

//action-creator
export const setUsers = (users) => ({ type: SET_USERS, payload: users });
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setFetchError = (bool) => ({
  type: SET_FETCH_ERROR,
  payload: bool,
});
