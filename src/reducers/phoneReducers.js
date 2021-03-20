const ADD_PHONE = "ADD_PHONE";

const defaultState = {
  phone: [],
  isFetching: true,
};

export default function phone(state = defaultState, action) {
  switch (action.type) {
    case ADD_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    default:
      return state;
  }
}

export const addPhone = (phone) => ({ type: ADD_PHONE, payload: phone });
