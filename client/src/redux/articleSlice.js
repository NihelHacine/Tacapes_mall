import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

//get all article
export const getarticles = createAsyncThunk("article/get", async() => {
    try {
        let result = axios.get("http://localhost:5000/article/allarticles");
        return result ; 
    } catch (error) {
        console.log(error);
    }
})


//add new article
export const addarticle = createAsyncThunk("article/add", async(article) => {
    try {
        let result = axios.post("http://localhost:5000/article/addarticle", article);
        return result ; 
    } catch (error) {
        console.log(error);
    }
})

//remove article
export const removearticle = createAsyncThunk("article/delete", async(id) => {
    try {
        let result = axios.delete(`http://localhost:5000/article/${id}`);
        return result ; 
    } catch (error) {
        console.log(error);
    }
})

//update article
export const updatearticle = createAsyncThunk("article/update", async({id, edited}) => {
    try {
        let result = axios.put(`http://localhost:5000/article/${id}`, edited);
        return result ; 
    } catch (error) {
        console.log(error);
    }
})


const initialState = {
  article : null ,
  status : null
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,

  reducers: {
 
  },
 extraReducers : {
    [getarticles.pending] : (state) => {
        state.status = "pending" 
    },
    [getarticles.fulfilled] : (state, action) => {
        state.status = "fullfilled";
        state.article = action.payload.data.article;
    },
    [getarticles.rejected] : (state) => {
        state.status = "rejected" 
    },
    
    [addarticle.pending] : (state) => {
        state.status = "pending" 
    },
    [addarticle.fulfilled] : (state) => {
        state.status = "fullfilled";
    },
    [addarticle.rejected] : (state) => {
        state.status = "rejected" 
    },
    [removearticle.pending] : (state) => {
        state.status = "pending" 
    },
    [removearticle.fulfilled] : (state) => {
        state.status = "fullfilled";
    },
    [removearticle.rejected] : (state) => {
        state.status = "rejected" 
    },
    [updatearticle.pending] : (state) => {
        state.status = "pending" 
    },
    [updatearticle.fulfilled] : (state) => {
        state.status = "fullfilled";
    },
    [updatearticle.rejected] : (state) => {
        state.status = "rejected" 
    },
 }
});


// Action creators are generated for each case reducer function
export const {  } = articleSlice.actions

export default articleSlice.reducer