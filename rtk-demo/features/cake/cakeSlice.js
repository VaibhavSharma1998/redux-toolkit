const createSlice = require('@reduxjs/toolkit').createSlice

const initialState ={
    NumberOfCakes:10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState:initialState,
    reducers: {
        ordered:(state)=>{
            state.NumberOfCakes--
        },
        reStocked:(state,action)=>{
            state.NumberOfCakes += action.payload
        }
    }
}) 

module.exports = cakeSlice.reducer

module.exports.cakeActions = cakeSlice.actions