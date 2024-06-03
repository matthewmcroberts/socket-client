import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


type ChatMessage = {
    sender: string,
    message: string,
}


type State = {
    chatrooms: string[],
    chats: {
        [key: string]: ChatMessage[],
    };
    activeChatroom: string,
};


const initialState: State = {
    chatrooms: [],
    chats: {},
    activeChatroom: "",
};


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addChat: (state, action: PayloadAction<string>) => {
            state.chatrooms?.push(action.payload);
            state.chats[action.payload] = []
            console.log(state.chatrooms[0]);
            console.log(state.chats[state.chatrooms[0]]);
        },
        removeChat: (state, action: PayloadAction<string>) => {
            const index = state.chatrooms?.indexOf(action.payload);
            state.chatrooms?.splice(Number(index), 1);
            delete state.chats[action.payload];
            console.log(state.chatrooms, state.chats);
        },
        addMessage: (state, action) => {
            const message: ChatMessage = {sender: action.payload.sender, message: action.payload.message};
            state.chats[action.payload.room].push(message);
        },
        enterChat: (state, action: PayloadAction<string>) => {
            state.activeChatroom = action.payload;
            console.log(state.activeChatroom);
        },
    }
});


export const chatActions = chatSlice.actions;


export default chatSlice.reducer;



