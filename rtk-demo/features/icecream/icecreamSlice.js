const createSlice = require('@reduxjs/toolkit').createSlice 

const initialState ={
    numberOfIcecreams:20,
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState:initialState,
    reducers:{
        ordered:(state)=>{
            state.numberOfIcecreams--
        },
        reStocked:(state,action)=>{
            state.numberOfIcecreams += action.payload
        },

    },
})

module.exports = icecreamSlice.reducer

module.exports.icecreamActions = icecreamSlice.actions