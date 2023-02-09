import { createSlice } from "@reduxjs/toolkit";

//initial state
let initialState = [{id:1,nom:"shakur",prenom:"tupac",filier:"music",age:48},
{id:2,nom:"escobar",prenom:"pablo",filier:"narcotics",age:99},
{id:3,nom:"Sanshez",prenom:"Rick",filier:"science",age:665},
]
const stgReducer = createSlice({
    name:"stagaires",
    //it is the same as writing: initialState=initialState,
    initialState,
    reducers:{
        //add trainee, returning the old state array plus the new object
        addStg: (state,action)=>[...state,action.payload],
        //delete a trainee, by filtering by the given id in the action.payload
        removeStg: (state,action)=>(
            [...state.filter(item=>item.id !== action.payload)]),
        
        //mapping through the state and updating the one with the given id (in action.payload.id)
        updateStg: (state,action)=>{
            return [...state.map(item=>item.id === action.payload.id? action.payload : item)]},
    }
})
//exporting actions
export const {addStg,removeStg,updateStg} = stgReducer.actions;

//exporting the reducer
export default stgReducer.reducer;
