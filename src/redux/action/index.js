let nextId = 0;
export const calculate = payload => ({type: 'CALCULATE', payload});

export const addItem = (groupname, price, person, result) => ({
  type: 'ADD_ITEM',
  payload: {groupname, price, person, result},
});

export const deleteItem = payload => ({type: 'DELETE_ITEM', payload});
