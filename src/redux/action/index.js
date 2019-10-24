export const calculate = payload => ({type: CALCULATE, payload});

export const addItem = (groupname, price, person) => ({
  type: ADD_ITEM,
  payload: {groupname, price, person},
});

export const deleteItem = id => ({type: DELETE_ITEM, payload: id});
