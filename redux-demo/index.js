const redux = require("redux");

const createStore = redux.createStore;

const bindActionCreaters = redux.bindActionCreators;

const combineReducers = redux.combineReducers;

const applyMiddleWare = redux.applyMiddleware;

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_STOCKED = "CAKE_STOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_STOCKED = "ICECREAM_STOCKED";

function cakeOrder() {
  return {
    type: "CAKE_ORDERED",
  };
}

const cakeStocked = (qty = 1) => {
  return {
    type: "CAKE_STOCKED",
    payload: qty,
  };
};

function iceCreamOrder(qty = 1) {
  return {
    type: "ICECREAM_ORDERED ",
    payload: qty,
  };
}

const iceCreamStocked = (qty = 1) => {
  return {
    type: "ICECREAM_STOCKED",
    payload: qty,
  };
};

console.log("action is completes!");

// reducers
// (state=initialSttate,action) = newState

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIcecreamState = {
  numberOfIcecreams: 50,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numberOfCakes: state.numberOfCakes - 1,
      };

    case CAKE_STOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };

    case ICECREAM_STOCKED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducers,applyMiddleWare(logger));

console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() => {
  
});

const actions = bindActionCreaters(
  { cakeOrder, cakeStocked, iceCreamOrder, iceCreamStocked },
  store.dispatch
);
actions.cakeOrder();
actions.cakeOrder();
actions.cakeStocked(2);
actions.iceCreamOrder();
actions.iceCreamOrder();
actions.iceCreamOrder();
actions.iceCreamOrder();
actions.iceCreamStocked(4);

unsubscribe()
