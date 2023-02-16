import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrderd} from '../cake/cakeSlice'

// const { cakeActions } = require('../cake/cakeSlice')



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
    // extraReducers:{
    //     ['cake/ordered'] : (state)=>{
    //         state.numberOfIcecreams--
    //     }
    // }

    // recommended extrareducer

    extraReducers:(builder)=>{
        builder.addCase(cakeOrderd,(state)=>{
            state.numberOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer

export const{ordered,reStocked} = icecreamSlice.actions