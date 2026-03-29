import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";


// createAsyncThunk

// {type: 'coin/fetch/pending' , payload: undefined}
// {type: 'Coin/fetch/fullfiled' , payload:data}
// {type: 'Coin/fetch/rejected, payload: "error_message"}


const FetchData=createAsyncThunk(
    
   'Coin/fetch',
//    we created an action type:coin/fetch
   async(args,thunkAPI)=>{
         try{
            const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data=await response.json();
            return data;
         }
         catch(error){
            return rejectWithValue(error.message);
         }
  
   }

)