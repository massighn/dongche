//import initialState from '../store/ItemStore';
//const initialState = {items: [], result: 0};

const Reducer = (state = [], {type, payload}) => {
  switch (type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          groupname: payload.groupname,
          price: payload.price,
          person: payload.person,
          result: parseInt(
            payload.price.toEnglish() / payload.person.toEnglish(),
          )
            .toFixed()
            .toPersian(),
        },
      ];

    case 'DELETE_ITEM':
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

export default Reducer;
