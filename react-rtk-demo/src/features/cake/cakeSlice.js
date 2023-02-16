import {createSlice} from '@reduxjs/toolkit'


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
        },
        
    }
}) 

export default cakeSlice.reducer

export const{ordered,reStocked} = cakeSlice.actions