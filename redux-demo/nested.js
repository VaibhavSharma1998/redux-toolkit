const redux = require('redux')
const produce = require('immer').produce

const initialState = {
    name:'vaibhav Sharma',
    address:{
        street:'100 deputy lal',
        city:'Ambala',
        state:'H R'
    }
}

const UPDATED_STREET = 'UPDATED_STREET'

const updateStreet = (street)=>{
    return{
        type:UPDATED_STREET,
        payload:street,
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case UPDATED_STREET:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }

            //f by immune library

            return produce (state,(draft)=>{
                draft.address.street =action.payload
            })
            
        
            default:
                return state
    }
}

const store = redux.createStore(reducer)

console.log('initial State',store.getState())

const unsubscribe = store.subscribe(()=>{console.log('updated State',store.getState())})

store.dispatch(updateStreet('200 Manmohani rani'))

unsubscribe()