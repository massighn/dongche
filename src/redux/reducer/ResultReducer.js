import initialState from '../store/ResultStore';

const Reducer = (state = {result: 0}, {type, payload}) => {
  switch (type) {
    case 'CALCULATE':
      return {...state, result: payload};
    default:
      return state;
  }
};

export default Reducer;
