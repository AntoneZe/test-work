const ADD_PHONE = "ADD_PHONE";
const DELETE_PHONE = "DELETE_PHONE";

const defaultState = {
  phoneList: [],
  isFetching: true,
  startId: 0,
};

export default function phone(state = defaultState, action) {
  switch (action.type) {
    case ADD_PHONE:
      return {
        ...state,
        startId: state.startId + 1,
        phoneList: [
          ...state.phoneList,
          { id: state.startId, ...action.payload },
        ],
      };
    case DELETE_PHONE:
      const filteredPhoneList = state.phoneList.filter(
        (el) => el.id !== action.payload.id
      );
      return {
        ...state,
        phoneList: filteredPhoneList,
      };
    default:
      return state;
  }
}

export const addPhone = (phoneList) => ({
  type: ADD_PHONE,
  payload: phoneList,
});

export const deletePhone = (id) => ({
  type: DELETE_PHONE,
  payload: id,
});
