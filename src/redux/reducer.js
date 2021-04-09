import {combineReducers} from 'redux';
import {storeData} from '../utils/localStorage';

const initialRegister = {
  form: {
    username: '',
    nama: '',
    email: '',
    password: '',
  },
  title: 'masukan username aanda',
  desc: 'ini adalah desc',
};

const initialLogin = {
  info: 'ini adalah info',
  form: {
    email: '',
    password: '',
  },
};

const initialUsers = {
  data: null,
};

// const initialUsers = {};

const initalTools = {
  loading: false,
  cart: 0,
};

const reducerTools = (state = initalTools, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.inputValue,
      };
    case 'SET_CART':
      // storeData('cart', action.inputValue);
      return {
        ...state,
        cart: action.inputValue,
      };
  }
  return state;
};

const reducerRegister = (state = initialRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'register ganti titles',
    };
  }

  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducerLogin = (state = initialLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducerUsers = (state = initialUsers, action) => {
  if (action.type === 'SET_USERS') {
    return {
      ...state,
      data: action.value,
    };
  }
  return state;
};

const reducer = combineReducers({
  reducerRegister,
  reducerLogin,
  reducerTools,
  reducerUsers,
});

export default reducer;
