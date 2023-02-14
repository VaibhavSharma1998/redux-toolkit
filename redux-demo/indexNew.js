const redux = require("redux");

const createStore = redux.createStore;

const bindActionCreaters = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_STOCKED ="CAKE_STOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_STOCKED = "ICECREAM_STOCKED"



function cakeOrder() {
  return {
    type: "CAKE_ORDERED",
    
  };
}

const cakeStocked =(qty=1)=>{
  return{
    type:"CAKE_STOCKED",
    payload:qty
  }
}

function iceCreamOrder(qty=1) {
  return {
    type: "ICECREAM_ORDERED ",
    payload: qty,
  };
}

const iceCreamStocked =(qty=1)=>{
  return{
    type:"ICECREAM_STOCKED",
    payload:qty
  }
}

console.log("action is completes!");

// reducers
// (state=initialSttate,action) = newState

const initialState = {
  numberOfCakes: 10,
  numberOfIcecreams : 50,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numberOfCakes: state.numberOfCakes - 1,
      };
   
      case CAKE_STOCKED:
        return{
          ...state,
          numberOfCakes:state.numberOfCakes +action.payload,
        }

        case ICECREAM_ORDERED:
          return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - 1,
          };
       
          case ICECREAM_STOCKED:
            return{
              ...state,
              numberOfIcecreams:state.numberOfIcecreams +action.payload,
            }
            default:
              return state
  }
};

const store = createStore(reducer);

console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});



store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(cakeStocked(5))


store.dispatch(iceCreamOrder());
store.dispatch(iceCreamOrder());
store.dispatch(iceCreamOrder());
store.dispatch(iceCreamOrder());
store.dispatch(iceCreamOrder());
store.dispatch(iceCreamStocked(5))
unsubscribe()