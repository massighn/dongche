//import initialState from '../store/ItemStore';
//const initialState = {items: [], result: 0};
import moment from 'jalali-moment';
let currentDate = new Date();
let m = moment(currentDate);

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
          date: m.locale('fa').format('YYYY/MMMM/DD'),

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
