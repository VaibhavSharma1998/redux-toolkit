const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED ='CAKE_ORDERED'
const CAKE_RESTORE = 'CAKE_RESTORE'

const initialState={
    numberOfCakes:100,
}

const orderCake =()=>{
    return{
        type:'CAKE_ORDERED'
      
    }
}

const cakeRestore =(qty=1)=>{
    return{
        type:'CAKE_RESTORE',
        playLoad :qty
    }
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                numberOfCakes :state.numberOfCakes -10
            }
            default: return state

        case CAKE_RESTORE:
            return{
                numberOfCakes :state.numberOfCakes +action.playLoad
            }
    }
    
}

const store = createStore(reducer)

console.log('initialState',store.getState())

  store.subscribe(()=>{console.log('Updated State',store.getState())})

store.dispatch(orderCake())

store.dispatch(orderCake())

store.dispatch(cakeRestore(7))