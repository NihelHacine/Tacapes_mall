import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
export const getboutique = createAsyncThunk ("boutique/get",async()=> {try {
    let result = axios.get("http://localhost:5000/boutique/allboutique")
    return result;
} catch (error) {
    console.log(error);
}})
export const addboutique = createAsyncThunk ("boutique/add",async(boutique)=> {try {
    let result = axios.post("http://localhost:5000/boutique/addboutique",boutique)
    return result;
} catch (error) {
    console.log(error);
}})
export const deleteboutique = createAsyncThunk ("boutique/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/boutique/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editboutique = createAsyncThunk ("boutique/update",async({id,edited})=> {try {
    let result = axios.put (`http://localhost:5000/boutique/${id}`,edited)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    boutiquelist:null,
    status:null,
}

export const boutiqueSlice = createSlice({

  name: 'boutique',
  initialState,
  reducers: {},
  extraReducers:{
    [getboutique.pending]:(state) => {
        state.status="pending";
    },
    [getboutique.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.boutiquelist =action.payload.data.boutique;
    },
    [getboutique.rejected]:(state) => {
        state.status="rejected";
    },

    [addboutique.pending]:(state) => {
        state.status="pending";
    },
    [addboutique.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addboutique.rejected]:(state) => {
        state.status="rejected";
    },

    [deleteboutique.pending]:(state) => {
        state.status="pending";
    },
    [deleteboutique.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleteboutique.rejected]:(state) => {
        state.status="rejected";
    },

    [editboutique.pending]:(state) => {
        state.status="pending";
    },
    [editboutique.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editboutique.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =boutiqueSlice.actions

export default boutiqueSlice.reducer