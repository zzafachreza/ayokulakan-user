export const setForm = (inputType, value) => {
  return {type: 'SET_FORM', inputType: inputType, inputValue: value};
};

export const setUsers = (key, value) => {
  return {type: 'SET_USERS', key: key, value: value};
};

export const setCart = (value) => {
  return {type: 'SET_CART', inputValue: value};
};

export const setCartDelete = (value) => {
  return {type: 'SET_CART_DELETE', inputValue: value};
};

export const setCartProduct = (value) => {
  return {type: 'SET_CART_PRODUCT', inputValue: value};
};

export const setLoading = (value) => {
  return {type: 'SET_LOADING', inputValue: value};
};
