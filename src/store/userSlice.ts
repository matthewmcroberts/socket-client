import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api/authenticate";

type State = {
    user: User | undefined;
    loading: boolean;
  };
  
  const initialState : State = {
    user: undefined,
    loading: false
  };

  export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        authenticateAction:(state)=>{
            state.loading = true;
        },
        authenticatedAction:(state,action:PayloadAction<User | undefined>)=>{
            state.loading = false;
            state.user = action.payload;
            //console.log(state.user);
        },
        authorizeAction:(state)=> {
            state.loading = true;
        },
        authorizedAction:(state)=>{
            state.loading = false;
        },
        logout: (state) => {
            state.user = undefined;
        }
    },
    });

    export const userActions = userSlice.actions;

    export default userSlice.reducer;
