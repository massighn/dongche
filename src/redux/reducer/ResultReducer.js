import initialState from '../store/ResultStore';

const Reducer = (state = [], {type, payload}) => {
  switch (type) {
    case 'CALCULATE':
      return [...state, payload];
    default:
      return state;
  }
};

export default Reducer;
