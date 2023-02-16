const redux = require("redux");
const axios = require("axios");
const createStore = redux.createStore;
const thunkMiddleWare = require("redux-thunk").default;
const applyMiddleWare = redux.applyMiddleware;

// step 1 creating a state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// step 2 const strings

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCESSED = "FETCH_USER_SUCCESSED ";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

// step 3 action creator

const fetchRequested = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};

const fetchSuccessed = (user) => {
  return {
    type: FETCH_USER_SUCCESSED,
    payload: user,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

// step 4 reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESSED:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));

// api implementation

// const fetchUsers  =()=>{
//     return function(dispatch){
//         dispatch(fetchRequested())
//         axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
//             const users = response.data.map((person)=>person.name)
//             // console.log(response)
//             dispatch(fetchSuccessed(users))
//         }).catch((error)=>{
//             dispatch(fetchError(error.message))
//         })
//     }
// }

// again write fetchUsers for practice
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((person) => person.name);
        dispatch(fetchSuccessed(users));
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
