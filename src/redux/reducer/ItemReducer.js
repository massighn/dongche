import initialState from "../store/ItemStore";

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Math.floor(Math.random() * 9999),
            groupname: payload.groupname,
            price: payload.price,
            person: payload.person
          }
        ]
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };

    default:
      return state;
  }
};

export default Reducer;
