const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

// console.log("Initial State",store.getState());
console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated State',store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.reStocked(3));


store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());

store.dispatch(icecreamActions.reStocked(2));




unsubscribe();
